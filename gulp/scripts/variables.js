
var $ = jQuery;

// vars are global for use elsewhere on the site
var	bind = 'click';//('ontouchstart' in document.documentElement ? "touchstart" : "click"); //desktop touchscreens only work with touch when this is set
	$toggle_btn = $('#mobile-navigation-toggle'),
	$mobile_container = $('#mobile-navigation'),
	isScrolling = false; //used in the smooth scroll function