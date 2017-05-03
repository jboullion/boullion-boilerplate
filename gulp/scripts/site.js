jQuery(document).ready(function($) {

    /*
    $('a').filter(function() {
        return this.hostname && this.hostname !== location.hostname;
    }).after('<i class="fa fa-external-link"></i>');
    */

    $('#desktop-menu .menu-item-has-children > a, #mobile-menu .menu-item-has-children > a').click(function(e){
        e.preventDefault();

        if($(this).parent().hasClass('current_page_parent')){
          $(this).parent().removeClass('current_page_parent');
        }else{
          $(this).parent().addClass('current_page_parent');
        }

    });

    $(window).resize(function() {
        if($(window).width() <= 770) {
            hideSpellMenu();
        }else{
            resetSpellMenu();
        }
    });

    $('#open-spells').on('click', function(e){
        if($('#spell-menu').hasClass('open')){
            hideSpellMenu();
        }else{
            showSpellMenu();
        }
    });

    $('#screen-shade').on('click',function(e){

        hideSpellMenu();
    });

    $('.school-levels h3').on('click',function(e){
       $(this).next().toggle();
    });

    $('#content-search').keyup(function(e){
        var searchText = $(this).val().toLowerCase();
        var imageName = '';

        $('.image-div').each(function(index){
            imageName = $(this).attr('data-name').toLowerCase();
            if(imageName.indexOf(searchText) < 0 ){
                $(this).hide();
            }else{
                $(this).show();
            }
        });

    });

});

function hideSpellMenu(){
    jQuery('#spell-menu').css('left', '-256px').removeClass('open').addClass('closed');
    jQuery('#screen-shade').hide();
}

function showSpellMenu(){
    jQuery('#spell-menu').css('left', '0px').removeClass('closed').addClass('open');
    jQuery('#screen-shade').show();
}

function resetSpellMenu(){
    jQuery('#spell-menu').attr('style','');
    jQuery('.school-levels ul').show().attr('style','');
    jQuery('#screen-shade').hide();
}

var lazyCount = 0;

function loadContent(postType, completeFunction){

    var $imageWrapper = jQuery('#images-wrap');

    jQuery.post( pagePath+'ajax/get-content.php', { ccount: lazyCount, post_type:postType })
        .done(function( data ) {
            //console.log(data);
						$imageWrapper.append(data);

						if(completeFunction != null ) {
								completeFunction();
						}
						/*
            if (data == 'empty') {
                if(completeFunction != null ) {
                    completeFunction();
                }

            } else {
                //lazyCount = lazyCount + 20;
                $imageWrapper.append(data);
                //NOTE: was previously loading 20 items at a time and recursively loading more content until no more content was returned...but there are not any calls with more than 100 or so elements so this seemed unecessary. Left code in place anyway
                //loadContent(postType, completeFunction);

            }
						*/
        });
}

/*
function loadDisqus() {
    var disqus_shortname = 'your_disqus_shortname';
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    disqusLoaded=true;
}*/
/*
function lazyload(){
    var wt = jQuery(window).scrollTop();    //* top of the window
    var wb = wt + jQuery(window).height();  //* bottom of the window

    jQuery(".image-div img").each(function(){
        console.log('Another Div');
        var ot = jQuery(this).offset().top;  //* top of object (i.e. advertising div)
        var ob = ot + jQuery(this).height(); //* bottom of object

        if(!jQuery(this).attr("loaded") && wt<=ob && wb >= ot){
            jQuery(this).html("here goes the iframe definition");
            jQuery(this).attr("loaded",true);
        }
    });
}*/

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//jQuery(document).ready(function($){
    //var myEfficientFn = debounce(function() {
    // All the taxing stuff you do
    //lazyload();
    // }, 250);

    //window.addEventListener('scroll', myEfficientFn);

    //$(window).scroll(lazyload);
    //lazyload();
    /*
     $('.image-div img').lazyloadanything({
     'onLoad': function(e, LLobj) {
     var $div = LLobj.$element;
     var src = $div.attr('data-src');
     $div.attr('src', src);
     },
     'onLoadingStart': function(e, LLobj) { console.log('Something is Happening'); return true }
     });*/

    //$(".image-div").unveil(1000);


//});
