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
                    vertical: false,
                    verticalScrolling: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    appendDots: $('#dots-mobile'),
                }
            }
        ]
    })

)
$(document).ready(
    $('.n-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        slidesToShow: 3,
        nextArrow: ' <img src="./img/arrRight.png" alt="" class="rightArr">',
        prevArrow: ' <img src="./img/arrLeft.png" alt="" class="leftArr">',
        dotsClass: 'news-dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
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

