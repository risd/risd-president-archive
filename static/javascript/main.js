$(document).ready(function(){
	$('.hamburger-activator').click(function(){
		$('.mainNav').toggleClass('on');
	});
	$('.nav-link').click(function(){
		$('.mainNav').toggleClass('on');
	});

	slickSetup();
    masonrySetup();
});



// $(window).load(function() {
//     var all_sliders = [];
//
//     // helper functions for video playback
//     function addEvent(element, eventName, callback) {
//         if (element.addEventListener) {
//             element.addEventListener(eventName, callback, false);
//         } else {
//             element.attachEvent(eventName, callback, false);
//         }
//     }
//
//     function ready(player_id) {
//         var froogaloop = $f(player_id);
//         froogaloop.addEvent('play', function(data) {
//             $('.flexslider').flexslider("pause");
//         });
//         froogaloop.addEvent('pause', function(data) {
//             $('.flexslider').flexslider("play");
//         });
//     }
//     // end helper functions for video playback
//
//     // helper functions define nav
//     var update_slider_nav = function (slider) {
//         // if only one slide, there is no need to update.
//         if (slider.slides) {
//             // update navigation based on slide
//             var class_list = slider
//                                 .slides
//                                 .eq(slider.animatingTo)
//                                 .attr('class');
//             if (class_list) {
//                 if(class_list.indexOf('nav-dark') != -1) {
//                     $('.flex-direction-nav', slider)
//                         .removeClass('nav-light')
//                         .addClass('nav-dark');
//                 } else {
//                     $('.flex-direction-nav', slider)
//                         .removeClass('nav-dark')
//                         .addClass('nav-light');
//                 }
//             }
//         }
//
//         return slider;
//     };
//     // end helper functions define nav
//
//     // helpers, manage slide shows in relationship to window
//     function track_slider(slider) {
//         all_sliders.push(slider);
//         return slider;
//     }
//
//     function pause_play_sliders () {
//         if (all_sliders.length === 0) return;
//
//         for (var i = 0; i < all_sliders.length; i++) {
//             if ((all_sliders[i].slides) &&
//                 (all_sliders[i].playing) &&
//                 (all_sliders[i][0].getBoundingClientRect().top < 0)) {
//                 // the top is now below the top
//                 // see if its playing, if so, stop it.
//                 all_sliders[i].flexslider("pause");
//                 all_sliders[i].addClass('paused');
//
//             } else if ((all_sliders[i].slides) &&
//                        (!all_sliders[i].playing) &&
//                        (all_sliders[i][0].getBoundingClientRect().top >= 0)) {
//                 all_sliders[i].flexslider("play");
//                 all_sliders[i].removeClass('paused');
//
//             }
//         }
//
//     }
//     // end helpers, manage slide shows in relationship to window
//
//
//     // initialize it.
//     $('.flexslider')
//         .flexslider({
//             animation: "slide",
//             useCSS: true,
//             // animationLoop: false,
//             smoothHeight: true,
//             prevText: "Ó",
//             nextText: "Î",
//             start: function (slider) {
//                 // Fires when the slider loads the first slide
//
//                 track_slider(slider);
//                 update_slider_nav(slider);
//
//                 pause_play_sliders();
//             },
//             before: function (slider) {
//                 // Fires asynchronously with each slider animation
//
//
//                 update_slider_nav(slider);
//             },
//             after: function (slider) {
//                 // after each animation
//             }
//         });
//
//     // scrolls stuff that makes more sense to
//     // happen with a slight delay.
//     // can put heavier things in here.
//     $(window).scroll( function (e) {
//         // manage play/pause
//         pause_play_sliders();
//     });
//
//     // based on cur pos, check scroll.
//     pause_play_sliders();
// });

function masonrySetup () {
    var container = document.querySelector('.press-images');
    if (!container) return;
    var containerWidth =
            container
                .getBoundingClientRect()
                .width;
    var columnWidth = containerWidth / 3;

    imagesLoaded(container, function () {
        var msnry = new Masonry(container,
                                { itemSelector: '.press-image',
                                  columnWidth: columnWidth});
        msnry.bindResize();
    });
}


function slickSetup() {
	$('.slider-container').slick({
		infinite: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		centerPadding: '20%',
		focusOnSelect: false,
		// dots: true,
		prevArrow: '<div class="left-arrow" aria-label="previous"><p>❮</p></div>',
		nextArrow: '<div class="right-arrow" aria-label="next"><p>❯</p></div>'
	});
	// $('.slider-container').slick();
}
