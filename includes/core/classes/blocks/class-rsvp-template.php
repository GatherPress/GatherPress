<?php
/**
 * Class responsible for managing the RSVP Template block for GatherPress,
 * including preparation of its output and handling hooks for customization and interactivity.
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

namespace GatherPress\Core\Blocks;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

use GatherPress\Core\Block;
use GatherPress\Core\Event;
use GatherPress\Core\Traits\Singleton;
use WP_Block;
use WP_Block_Type_Registry;
use WP_HTML_Tag_Processor;

/**
 * Class Rsvp_Template.
 *
 * This class manages the RSVP Template block for GatherPress, handling the
 * preparation of block output and adding hooks for customizations.
 *
 * It ensures seamless integration with WordPress's block editor and dynamic functionality.
 *
 * @since 1.0.0
 */
class Rsvp_Template {
	/**
	 * Enforces a single instance of this class.
	 */
	use Singleton;

	/**
	 * Constant representing the Block Name.
	 *
	 * @since 1.0.0
	 * @var string
	 */
	const BLOCK_NAME = 'gatherpress/rsvp-template';

	/**
	 * Class constructor.
	 *
	 * This method initializes the object and sets up necessary hooks.
	 *
	 * @since 1.0.0
	 */
	protected function __construct() {
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
		add_filter( 'render_block', array( $this, 'ensure_block_styles_loaded' ), 10, 2 );
	}

	/**
	 * Ensures that the required block styles are loaded for the `gatherpress/rsvp-template` block.
	 *
	 * This function checks if the `gatherpress/rsvp-template` block contains inner blocks and retrieves
	 * their block names. It then enqueues the associated styles for each inner block dynamically.
	 *
	 * @since 1.0.0
	 *
	 * @param string $block_content The content of the current block being rendered.
	 * @param array  $block         The block data, including attributes and inner blocks.
	 *
	 * @return string The filtered block content.
	 */
	public function ensure_block_styles_loaded( string $block_content, array $block ): string {
		if ( self::BLOCK_NAME === $block['blockName'] ) {
			$block_instance = Block::get_instance();
			$tag            = new WP_HTML_Tag_Processor( $block_content );

			if ( $tag->next_tag() ) {
				$inner_blocks = (array) json_decode( $tag->get_attribute( 'data-blocks' ), true );
				$inner_blocks = $block_instance->get_block_names( $inner_blocks );

				foreach ( $inner_blocks as $inner_block ) {
					$block_registry = WP_Block_Type_Registry::get_instance();
					$block_type     = $block_registry->get_registered( $inner_block );

					if ( $block_type && ! empty( $block_type->style ) ) {
						wp_enqueue_style( $block_type->style );
					}
				}
			}
		}

		return $block_content;
	}

	/**
	 * Renders the RSVP Template block dynamically based on the event's RSVP responses.
	 *
	 * This method fetches RSVP responses for the current event and renders
	 * the block content dynamically for each response. If no valid responses
	 * are available, a default template is appended to enable front-end API
	 * interactions and maintain the block structure.
	 *
	 * @since 1.0.0
	 *
	 * @param array    $attributes The block's attributes.
	 * @param string   $content    The initial content of the block.
	 * @param WP_Block $block      The block instance, including parsed block data.
	 *
	 * @return string The rendered block content, including responses and a default template.
	 */
	public function render_block( array $attributes, string $content, WP_Block $block ): string {
		$event = new Event( get_the_ID() );

		if ( ! $event->rsvp ) {
			return $content;
		}

		$responses = $event->rsvp->responses()['attending']['responses'];
		$content   = '';

		// Used for generating a parsed block for calls to API on the front end.
		$responses[]            = array( 'commentId' => -1 );
		$rsvp_response_template = '';

		foreach ( $responses as $response ) {
			$response_id = intval( $response['commentId'] );

			if ( -1 === $response_id ) {
				$blocks                 = wp_json_encode( $block->parsed_block );
				$rsvp_response_template = sprintf(
					'<div data-wp-interactive="gatherpress" data-wp-watch="callbacks.renderBlocks" data-blocks="%s"></div>',
					esc_attr( $blocks )
				);
				continue;
			}

			$content .= $this->get_block_content( $block->parsed_block, $response_id );
		}

		return $content . $rsvp_response_template;
	}

	/**
	 * Generates the content for an RSVP block based on the parsed block data and a response ID.
	 *
	 * This method renders a block with the specified parsed block data and attaches
	 * the given response ID as a context. It wraps the rendered block in a div with
	 * a data-id attribute for identification.
	 *
	 * @since 1.0.0
	 *
	 * @param array $parsed_block The parsed block data, typically from a block's JSON structure.
	 * @param int   $response_id  The ID of the response used to populate the block's context.
	 *
	 * @return string The rendered block content wrapped in a div with a data-id attribute.
	 */
	public function get_block_content( array $parsed_block, int $response_id ): string {
		$block_content = (
			new WP_Block(
				$parsed_block,
				array( 'commentId' => $response_id )
			)
		)->render( array( 'dynamic' => false ) );

		return sprintf( '<div data-id="rsvp-%1$d">%2$s</div>', $response_id, $block_content );
	}
}