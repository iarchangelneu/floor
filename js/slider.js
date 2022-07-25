window.onload = function () {
    var mediaQuery = window.matchMedia('(max-width: 425px)');
    var card = document.querySelectorAll('.floorT__block')
    if (mediaQuery.matches) {
        $('.floorT__cards').slick({
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            variableWidth: true,
            responsive: [

            ]
        });
        for (let i = 0; i < card.length; i++) {
            if (card[i].classList.contains('floorT__block-p')) { // Проверка всех элементов на наличие класса с маргинами
                card[i].classList.remove('floorT__block-p')  // Удаление класса с маргинами.
            }

        }
    }
}



function next() {
    $('.floorT__cards').slick('slickNext');
}
function prev() {
    $('.floorT__cards').slick('slickPrev');
}


$(document).ready(function () {
    $('.video__slider').slick({
        // centerPadding: '900px',
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        dots: true,
        arrows: false,
        variableWidth: true,
        dotsClass: 'review-dots',
        touchMove: true,
        // responsive: [
        //     {
        //         breakpoint: 1700,
        //         settings: {
        //             centerPadding: '500px',
        //         }
        //     },
        //     {
        //         breakpoint: 1440,
        //         settings: {
        //             centerPadding: '470px',
        //         }
        //     }
        //     ,
        //     {
        //         breakpoint: 1400,
        //         settings: {
        //             centerPadding: '410px',
        //         }
        //     }
        //     ,
        //     {
        //         breakpoint: 1300,
        //         settings: {
        //             centerPadding: '400px',
        //         }
        //     }
        //     ,
        //     {
        //         breakpoint: 1210,
        //         settings: {
        //             centerPadding: '300px',
        //         }
        //     }
        //     ,
        //     {
        //         breakpoint: 1025,
        //         settings: {
        //             centerPadding: '200px',
        //         }
        //     },
        //     {
        //         breakpoint: 800,
        //         settings: {
        //             centerPadding: '150px',
        //         }
        //     },
        //     {
        //         breakpoint: 700,
        //         settings: {
        //             centerPadding: '0px',
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             centerMode: true,
        //         }
        //     }
        // ]
    });

    $('.video__slider').slick('slickGoTo', 1);
});
