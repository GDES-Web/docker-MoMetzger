<?php
/**
 * Load files.
 *
 * @package Interserver Platinum
 */

/**
 * Implement the Custom Header feature.
 */
get_template_part('inc/custom','header');

/**
 * Custom functions that act independently of the theme templates.
 */
get_template_part('inc/extras');

/**
 * Custom template tags for this theme.
 */
get_template_part('inc/template','tags');

/**
 * Load Jetpack compatibility file.
 */
get_template_part('inc/jetpack');

/**
 * Customizer additions.
 */
include(locate_template('inc/customizer.php'));

/**
 * TGM
 */
get_template_part('lib/tgm/tgm');