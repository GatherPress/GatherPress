<?php
/**
 * Class responsible for importing content using WordPress' native import tool(s).
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

namespace GatherPress\Core;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

use GatherPress\Core\Event;
use GatherPress\Core\Migrate;
use GatherPress\Core\Traits\Singleton;
use WP_Post;

/**
 * Class Import.
 *
 * The Import class handles the importing of content using WordPress' native import tool.
 * This class will provide effective filtering and support validation of the import-objects
 * based on their post type and meta data.
 *
 * Succesfully identified GatherPress data will be saved into custom DB tables.
 *
 * @since 1.0.0
 */
class Import extends Migrate {
	/**
	 * Enforces a single instance of this class.
	 */
	use Singleton;

	/**
	 * Class constructor.
	 *
	 * This method initializes the object and sets up necessary hooks.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->setup_hooks();
	}

	/**
	 * Set up hooks for various purposes.
	 *
	 * This method adds hooks for different purposes as needed.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	protected function setup_hooks(): void {

		if ( class_exists( 'WXR_Importer' ) ) {
			/**
			 * Setup for WordPress Importer (v2).
			 *
			 * @see https://github.com/humanmade/Wordpress-Importer
			 */
			add_filter( 'wxr_importer.pre_process.post', array( '\GatherPress\Core\Import', 'set_entry_point' ) );
		} else {
			/**
			 * Setup for default WordPress Importer.
			 *
			 * @see https://github.com/WordPress/wordpress-importer/issues/42
			 */
			add_filter( 'wp_import_post_data_raw', array( '\GatherPress\Core\Import', 'set_entry_point' ) );
		}
		add_action( 'gatherpress_import', array( '\GatherPress\Core\Import', 'import' ) );
	}

	/**
	 * Extend WordPress' native Import.
	 *
	 * @see https://github.com/WordPress/wordpress-importer/blob/71bdd41a2aa2c6a0967995ee48021037b39a1097/src/class-wp-import.php#L631
	 *
	 * @param  array $post_data_raw The result of 'wp_import_post_data_raw'.
	 *
	 * @return array
	 */
	public static function set_entry_point( array $post_data_raw ): array {
		if ( self::validate( $post_data_raw ) ) {
			/**
			 * Fires for every GatherPress data to be imported.
			 *
			 * @since 1.0.0
			 *
			 * @param {array} $post_data_raw Unprocessesd 'gatherpress_event' post being imported.
			 */
			do_action( 'gatherpress_import', $post_data_raw );
		}
		return $post_data_raw;
	}

	/**
	 * Checks if the currently imported post is of type 'gatherpress_event'.
	 *
	 * @param  array $post_data_raw The result of 'wp_import_post_data_raw'.
	 *
	 * @return bool
	 */
	protected static function validate( array $post_data_raw ): bool {
		if ( ! isset( $post_data_raw['post_type'] ) || Event::POST_TYPE !== $post_data_raw['post_type'] ) {
			return false;
		}
		return true;
	}

	/**
	 * Import all custom data.
	 *
	 * @return void
	 */
	public static function import(): void {
		add_filter( 'add_post_metadata', array( '\GatherPress\Core\Import', 'add_post_metadata' ), 10, 5 );
	}

	/**
	 * Import data with custom scheme.
	 *
	 * This method is called on every imported post_meta
	 * and allows to work with the data to be imported.
	 *
	 * It checks if the current meta_key is one of GatherPress' pseudopostmetas
	 * and if an import-callback for that key exists.
	 * If both is true, the import callback is provided with all available information and called once per meta_key.
	 *
	 * The normal saving into the 'wp_postmeta' DB table is disabled in such a case.
	 *
	 * @see https://developer.wordpress.org/reference/hooks/add_meta_type_metadata/
	 * @see https://www.ibenic.com/hook-wordpress-metadata/
	 *
	 * @param null|bool $check      Whether to allow adding metadata for the given type.
	 * @param int       $object_id  ID of the object metadata is for.
	 * @param string    $meta_key   Metadata key.
	 * @param mixed     $meta_value Metadata value. Must be serializable if non-scalar.
	 * @param bool      $unique     Whether the specified meta key should be unique for the object.
	 *
	 * @return null|bool
	 */
	public static function add_post_metadata( ?bool $check, int $object_id, string $meta_key, mixed $meta_value, bool $unique ): ?bool {
		$pseudopostmetas = self::get_pseudopostmetas();
		if ( ! isset( $pseudopostmetas[ $meta_key ] ) ) {
			return $check;
		}
		if ( ! isset( $pseudopostmetas[ $meta_key ], $pseudopostmetas[ $meta_key ]['import_callback'] ) || ! is_callable( $pseudopostmetas[ $meta_key ]['import_callback'] ) ) {
			return $check;
		}

		/*
		 * Run import callback,
		 * e.g. Save data into a custom DB table.
		 */
		call_user_func(
			$pseudopostmetas[ $meta_key ]['import_callback'],
			$object_id,
			$meta_value
		);

		/*
		 * Returning a non-null value will effectively short-circuit the saving of 'normal' meta data.
		 */
		return false;
	}


	/**
	 * Save dates, times & timezone for the currently imported 'gatherpress_event' post.
	 *
	 * @param  int   $post_id   ID of the object metadata is for.
	 * @param  array $data      Metadata value. Must be serializable if non-scalar.
	 *
	 * @return void
	 */
	public static function datetimes_callback( int $post_id, array $data ): void {
		$event = new \GatherPress\Core\Event( $post_id );
		$event->save_datetimes( maybe_unserialize( $data ) );
	}
}
