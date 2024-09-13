<?php
/**
 * Template for GatherPress ical feeds
 *
 * This template is used to render an ical feed to the browser.
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

// Start collecting all output.
ob_start();

// Prepare event data.
$gatherpress_filename = 'all-events.ics';

// Send file headers.
header( 'Content-Description: .ics for all events' );
header( 'Content-Disposition: attachment; filename=' . $gatherpress_filename );
header( 'Content-type: text/calendar; charset=' . get_option( 'blog_charset' ) . ';' );
header( 'Pragma: 0' );
header( 'Expires: 0' );

// Generate ical.
echo wp_kses_post( 'hello subscribeable ical feed world.' );

// Get collected output and render it.
$gatherpress_ics_file = ob_get_contents();

// Calculate and send the file size.
$gatherpress_filesize = strlen( $gatherpress_ics_file );
header( 'Content-Length: ' . $gatherpress_filesize );

ob_end_clean();
echo wp_kses_post( $gatherpress_ics_file );

exit();