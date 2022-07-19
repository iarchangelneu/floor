var mediaQuery = window.matchMedia('(max-width: 414px)');
var card = document.querySelectorAll('.floorT__block')

function next() {
    $('.floorT__cards').slick('slickNext');
}
function prev() {
    $('.floorT__cards').slick('slickPrev');
}
if (mediaQuery.matches) {
    window.onload = function () {
        $('.floorT__cards').slick({
            arrows: false,
            centerMode: true,
            // centerPadding: '97px',
            slidesToShow: 1,
            variableWidth: true,
            responsive: [

            ]
        });
        for (let i = 0; i < card.length; i++) {
            if (card[i].classList.contains('floorT__block-p')) {
                card[i].classList.remove('floorT__block-p')
            }

        }


    }
}
