<?php
/**
 * Interserver Portfolio Theme Customizer.
 *
 * @package InterServer Portfolio
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function interserver_portfolio_customize_register($wp_customize) {
   $wp_customize->get_setting('blogname')->transport = 'postMessage';
   $wp_customize->get_setting('blogdescription')->transport = 'postMessage';
   $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';
   $wp_customize->get_setting('background_color')->transport = 'postMessage';
}
add_action('customize_register', 'interserver_portfolio_customize_register');

function interserver_portfolio_customize_css() {
   $header_text_color = get_header_textcolor();
?>
   <style type="text/css">
	   .archive-header h1, .page-header h1,.site-title a,#cssmenu > ul > li > a{ color: #<?php echo esc_attr($header_text_color); ?>; }
   </style>
   <?php
}
add_action('wp_head', 'interserver_portfolio_customize_css');

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function interserver_portfolio_customize_preview_js() {
   wp_enqueue_script('interserver_portfolio_customizer', get_template_directory_uri() . '/js/customizer.js', array(
      'customize-preview'
   ) , '20151215', true);
}
add_action('customize_preview_init', 'interserver_portfolio_customize_preview_js');
