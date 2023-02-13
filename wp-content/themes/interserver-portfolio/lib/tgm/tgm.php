<?php
/**
 * Recommended plugins.
 *
 * @package Interserver Platinum
 */
 

// TGM Plugin activation.
get_template_part('lib/tgm/class-tgm-plugin','activation');

add_action( 'tgmpa_register', 'interserver_platinum_activate_recommended_plugins' );
add_action( 'tgmpa_register', 'interserver_platinum_activate_recommended_plugins' );
function interserver_platinum_activate_recommended_plugins(){
	$plugins = array(
		array(
			'name'               => 'GBS Portfolio',
            'slug'               => 'gbs-portfolio',
            'required'           =>  false,
		),
		array(
			'name'               => 'Gutenberg Blocks by Kadence Blocks – Page Builder Features',
            'slug'               => 'kadence-blocks',
            'required'           =>  false,
		)		
	);
	$config = array();
	tgmpa( $plugins, $config );
}