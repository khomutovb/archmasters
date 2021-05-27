$(document).ready(function () {
    if ($("#menu-toggle").length) {
        $(document).on('click', function (e) {
            if ($(e.target).closest('.burger').length || $(e.target).hasClass('menu-toggle') || e.keyCode === 27) {
                $(".burger, header, .menu-toggle, .menu-toggle__inner").toggleClass('active')
                $("body").toggleClass('overflow')
            }
        })
        $(document).bind("keyup", null, function (event) {
            if (event.keyCode == 27) {
                $(".burger, header, .menu-toggle, .menu-toggle__inner").toggleClass('active')
                $("body").toggleClass('overflow')
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
});
