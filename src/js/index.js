$(document).ready(function () {
    $('.slider__inner').slick({
        speed: 500,
        // adaptiveHeight: true,
        prevArrow: `
            <button type="button" class="slick-prev">
                <img src="../icons/slider/btn-left.png">
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <img src="../icons/slider/btn-right.png">
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
});
