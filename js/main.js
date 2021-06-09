$(document).ready(function () {
    if ($("#menu-toggle").length) {
        $(document).on('click', function (e) {
            if ($(e.target).closest('.burger').length) {
                $(".burger, header, .menu-toggle, .menu-toggle__inner").toggleClass('active')
                $("body").toggleClass('overflow')
            }
            $(".menu-toggle.active").click(function () {
                $(".burger, header, .menu-toggle, .menu-toggle__inner").removeClass('active')
                $("body").removeClass('overflow')
            });
        })
        $(document).bind("keyup", null, function (event) {
            if (event.keyCode == 27) {
                if ($("#header").hasClass("active")) {
                    $(".burger, header, .menu-toggle, .menu-toggle__inner").removeClass('active')
                    $("body").removeClass('overflow')
                }
            }
        })
    }
    $(".lang__toogle").click(function () {
        $(".lang__list-hidden").toggleClass("active")
    });
    $(".team__slider").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / 1);
        let numPages = Math.ceil(slick.slideCount / 1);
        $(".second__section .slides-num").html(`<span>0${page}</span><span class="num__all">/0${numPages}</span>`);
    });
    $('.team__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.second__section .next_arrow',
        prevArrow: '.second__section .previous_arrow',
    });
    $(".project__gallery-slider").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page2 = Math.ceil(((currentSlide || 0) + 1) / 1);
        let leftNumber;
        let numPages2 = Math.ceil(slick.slideCount / 1);
        if (page2 >= numPages2) {
            leftNumber = ""
        }
        else {
            leftNumber = "0"
        }
        $(".project__gallery-section .slides-num").html(`<span>${leftNumber + page2}</span><span class="num__all">/${numPages2}</span>`);
    });
    var slickCheck = false;
    function greenSlider() {
        if ($(window).width() > 768) {
            if (!slickCheck) {
                $(".project__gallery-slider").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true,
                    arrows: true,
                    nextArrow: '.project__gallery-section .next_arrow',
                    prevArrow: '.project__gallery-section .previous_arrow',
                });
                slickCheck = true;
            }
        } else if ($(window).width() < 768) {
            if (slickCheck) {
                $(".project__gallery-slider").slick('unslick');
                slickCheck = false;
            }
        }
    }
    $(document).ready(function () {
        greenSlider();
    });
    $(window).on('resize', function () {
        greenSlider();
    });
    $(function () {
        $('.contact__link').on('click', function (e) {
            $(".burger, header, .menu-toggle, .menu-toggle__inner").toggleClass('active')
            $("body").toggleClass('overflow')
            e.preventDefault();
            $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1200);
        });
        $('.filter-list-mobile #all-project').on('click', function (e) {
            $(".filter-list-mobile").toggleClass('active')
            $(".filter-item-hidden").slideToggle("slow")
        });
    });
});