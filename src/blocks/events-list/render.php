<?php
/**
 * Render Events List block.
 *
 * @package GatherPress
 * @subpackage Core
 * @since 1.0.0
 */

if ( ! isset( $attributes ) || ! is_array( $attributes ) ) {
	return;
}
?>

<div <?php echo get_block_wrapper_attributes(); ?> data-gp_block_name="events-list" data-gp_block_attrs="<?php echo esc_attr( htmlspecialchars( wp_json_encode( $attributes ), ENT_QUOTES, 'UTF-8' ) ); ?>"></div>
