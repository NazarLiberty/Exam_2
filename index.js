$(document).ready(
    $('.h-slider').slick({
        vertical: true,
        verticalScrolling: true,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        appendDots: $('#dots'),
        dotsClass: 'my-dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    appendDots: $('#dots-mobile'),
                }
            }
        ]
    })
)
$('#burger').on('click', function () {
    $('#menu').addClass('h-menu__text--active');
})
$('#menu').on('click', function () {
    $('#menu').removeClass('h-menu__text--active');
})