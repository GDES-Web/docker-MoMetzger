<?php
/**
* The header for our theme.
*
* This is the template that displays all of the <head> section and everything up until <div id="content">
*
* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
*
* @package InterServer Portfolio
*
*/
?>
<!DOCTYPE html>
<html 
   <?php language_attributes(); ?>>
   <head>
      <meta charset="<?php bloginfo( 'charset' ); ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="profile" href="http://gmpg.org/xfn/11">
      <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
      <?php wp_head();
         ?>
   </head>
   <body 
      <?php body_class(); ?>>
      <?php wp_body_open();?>
      <div id="top"></div>
      <header id="masthead" class="site-header" role="banner">
         <div class="container">
         <div id='menu-cont' class="menu-wrap">
            <nav id="cssmenu">
               <h1 class="site-title">
                  <a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
                  <?php if ( function_exists( 'the_custom_logo' ) && ( has_custom_logo() ) ) { the_custom_logo(); } else {echo esc_html( get_bloginfo( 'name'));} ?>
                  </a>
               </h1>
               <div id="head-mobile">
               </div>
               <div class="button">
               </div>
               <?php wp_nav_menu( array( 'theme_location' => 'primary','container'=>'ul','menu_class'=>'main-menu')); ?>
            </nav>
         </div>
      </header>
      <!-- #masthead -->
      <?php

      if(!is_front_page() || is_home()){
         interserver_portfolio_header_image();
      } 
?> 
<div id="page" class="site">
   <div id="main-content" class="site-content">