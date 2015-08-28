$(document).ready(function(){
	hamburgerMenu();
	slickSetup();
    masonrySetup();
});

function hamburgerMenu() {
	$('.hamburger-activator, .hamburger-deactivator').click(function(){
		$('.mainNav').toggleClass('on');
	});
}

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
}
