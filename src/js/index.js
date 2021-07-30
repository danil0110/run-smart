$(document).ready(function () {
    $('.slider__inner').slick({
        speed: 500,
        prevArrow: `
            <button type="button" class="slick-prev">
                <img src="./icons/slider/btn-left.png">
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <img src="./icons/slider/btn-right.png">
            </button>
        `,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active')
            .siblings()
            .removeClass('catalog__tab_active')
            .closest('div.container')
            .find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index())
            .addClass('catalog__content_active');
    });

    function toggleDescr(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
            });
        });
    }

    toggleDescr('.catalog-item__link');
    toggleDescr('.catalog-item__back');

    // Modals

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: 'Пожалуйста, введите свое имя',
                phone: 'Пожалуйста, введите свой номер телефона',
                email: {
                    required: 'Пожалуйста, введите свой E-mail',
                    email: 'Некорректный E-mail',
                },
            },
        });
    }

    validateForm('#consultation-form');
    validateForm('#consultation .feed-form');
    validateForm('#order .feed-form');

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('form').submit(function (e) {
        e.preventDefault();

        $(this).find('input').val('');
        $('form').trigger('reset');
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();

        return false;
    });

    // Scroll up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    new WOW().init();
});
