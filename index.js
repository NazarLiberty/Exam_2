$('#projectsMenu').on('click',()=>{
    $('#menu path').attr('fill', 'transparent')
    $('#projectsMenu path').attr('fill', 'white')
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    })
})
$('#drop').on('click',()=>{
    window.scrollTo({
        top: $('#projects')[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
})
$('#aboutUsMenu').on('click',()=>{
    $('#menu path').attr('fill', 'transparent')
    $('#aboutUsMenu path').attr('fill', 'white')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
$('#newsMenu').on('click',(e)=>{
    $('#menu path').attr('fill', 'transparent')
    $('#newsMenu path').attr('fill', 'white')
    window.scrollTo({
        top: (e.pageY - 100) + $('#news')[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
})
$('#contactMenu').on('click',(e)=>{
    $('#menu path').attr('fill', 'transparent')
    $('#contactMenu path').attr('fill', 'white')
    window.scrollTo({
        top: (e.pageY - 100) + $('#footer')[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
})

$(document).on('click',function(e){
    console.log(e)
})


$(document).ready(
    $('.h-slider').slick({
        vertical: true,
        verticalScrolling: true,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        appendDots: $('#dots'),
        dotsClass: 'my-dots',
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 767,
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

function initMap() {
    var NY = { lat: 40.687777, lng: -73.904736 };    
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 14.3,
        center: NY,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]


    });
    var marker = new google.maps.Marker({ 
    position: NY,
    map: map,
    icon: 'img/marker.svg',
    animation: google.maps.Animation.BOUNCE,
    });
}
