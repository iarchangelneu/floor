// REVIEWS
$(document).ready(function(){
    $('.reviews__slider').slick({
        centerPadding: '650px',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        arrows: false,
        adaptiveHeigh: true,
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
            breakpoint: 1400,
            settings: {
              centerPadding: '410px', 
            }
          }
          ,
          {
            breakpoint: 1300,
            settings: {
              centerPadding: '400px', 
            }
          }
          ,
          {
            breakpoint: 1210,
            settings: {
              centerPadding: '300px', 
            }
          }
          ,
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '200px',  
            }
          },
          {
            breakpoint: 800,
            settings: {
              centerPadding: '150px',  
            }
          },
          {
            breakpoint: 700,
            settings: {
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          }
        ]
    });

    $('.reviews__slider').slick('slickGoTo', 1);
  });
// REVIEWS