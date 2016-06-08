/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/
"use strict";

jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/


	/************** Single Page Nav Plugin *********************/
	$('.menu').singlePageNav(
		{filter: ':not(.external)'}
	);



//https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
	/************** FlexSlider Plugin *********************/
	$('.flexslider').flexslider({
		animation : 'fade',
		animationLoop: true,
		slideshow  :	true,
		controlNav : false,
		slideshowSpeed : 3000,
		pauseOnAction :false,
		pauseOnHover : true,
		nextText : '',
		prevText : '',
	});

	 $('.flex-caption').addClass('animated slide');
	//fadeInUp
	$('.flex-direction-nav a').on('click', function() {
        $('.flex-caption').removeClass('animated slide');
        $('.flex-caption').fadeIn(0).addClass('animated slide');
    });


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});




/*------------------------------------------------------------------------*/
/*	2.	Site Specific Functions
/*------------------------------------------------------------------------*/


	/************** Go Top *********************/
	$('#go-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });



    /************** Responsive Navigation *********************/
	$('.toggle-menu').click(function(){
        $('.menu').stop(true,true).toggle();
        return false;
    });

	$('#area').click(function(){
       // if($(".menu").css("display")=="block"){
        $(".menu").css("display","none");
       // // };
       // console.log($(".menu").css("display"));
       // console.log($(".menu").css("display")=="block");

       //$(".menu").css("display","block");
    });


    $(".responsive-menu .menu a").click(function(){
        $('.responsive-menu .menu').hide();
    });






});