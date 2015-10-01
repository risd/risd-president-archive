var $ = global.jQuery;
require('jquery-bridget');
require('imagesLoaded');
require('packery');

module.exports = SortImages;

function SortImages() {
    if (!(this instanceof SortImages)) {
        return new SortImages();
    }
    console.log('SortImages initialized.');


    packerySetup('.inauguration-imageGallery', '.inauguration-image--link', '.inauguration-image--gutter');

    function packerySetup(container, images, gutter) {
        $(container).imagesLoaded(function(){
            $(container).packery({
                gutter: gutter,
                columnWidth: images,
                itemSelector: images
            });
        });
    }
}
