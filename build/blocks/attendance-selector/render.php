<?php
/**
 * Render Attendance Selector block.
 *
 * @package GatherPress
 * @subpackage Core
 * @since 1.0.0
 */

if ( ! isset( $attributes ) || ! is_array( $attributes ) ) {
	return;
}

$gp_attendance_selector = get_block_wrapper_attributes();
if ( $attributes['className'] ) {
	$gp_attendance_selector = 'class="' . $attributes['className'] . '"';
}
?>

<div <?php echo $gp_attendance_selector; ?> data-gp_block_name="attendance-selector" data-gp_block_attrs="<?php echo esc_attr( htmlspecialchars( wp_json_encode( $attributes ), ENT_QUOTES, 'UTF-8' ) ); ?>"></div>
