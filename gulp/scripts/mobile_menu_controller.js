jQuery(document).ready(function($) {
    var $mobile_sidebar = jQuery('#mobile-sidebar'),
        $mobile_btn = jQuery('#mobile-menu-btn');

    $mobile_btn.on('click', function(e){
        $mobile_sidebar.toggle();
    });

});
