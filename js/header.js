// HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("scroll", onScrollheader)
    onScrollheader()
});

function onScrollheader() {
    let hd = document.getElementById("header")
    let h = window.pageYOffset

    if (h > 5) {
        hd.style.backgroundColor = "#FFFFFF"
        hd.classList.add("navShadow")
    } else {
        hd.classList.remove("navShadow")
    }
}
// HEADER ON SCROLL

// REVIEWS
$(document).ready(function(){
    $('.reviews__slider').slick({
        centerPadding: '600px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        arrows: false,
        dotsClass: 'review-dots',
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                centerPadding: '500px',
              }
          },
          {
              breakpoint: 1440,
              settings: {
                centerPadding: '470px', 
              }
          }
          ,
          {
            breakpoint: 760,
            settings: {
                
            }
          },
          {
              breakpoint: 600,
              settings: {
                  
              }
          }
        ]
    });

    $('.reviews__slider').slick('slickGoTo', 1);
  });

 

// REVIEWS