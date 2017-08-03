(function() {
    var methods = {
        bxSlider: function() {
            $('.slider1').bxSlider({
                slideWidth: 150,
                minSlides: 2,
                maxSlides: 3,
                slideMargin: 10
            });
        },
        galleryPopUp: function() {
            $('.image-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        },
        fullModal: function() {
            $(".modal-fullscreen").on('show.bs.modal', function() {
                setTimeout(function() {
                    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
                }, 0);
            });
            $(".modal-fullscreen").on('hidden.bs.modal', function() {
                $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
            });
        },

        init: function() {
            this.bxSlider();
            this.galleryPopUp();
            this.fullModal();
        }
    };

    $('document').ready(function() {
        methods.init();
    });
})();
