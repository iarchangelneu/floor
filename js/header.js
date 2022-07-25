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
        if(window.innerWidth>480){
          hd.style.backgroundColor = "rgba(0,0,0,0)"
        }
        hd.classList.remove("navShadow")
    }
}
// HEADER ON SCROLL

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

// HEADER MOBILE
function openHeader() {
  let sc = $("#headerMobile")[0]
  sc.style.transition = "all 0.8s";
  sc.style.display = "block"
  // sc.style.left = sc.offsetHeight * -1 - 1000 + 'px'
  sc.style.right = 0;
  sc.style.top = 0;
  // setTimeout(openCatalogST, 50)
}

function closeHeader() {
  let sc = $("#headerMobile")[0]
  sc.style.transition = "all 0.8s";
  sc.style.right = -101 + 'vw'
}

// HEADER MOBILE

//ANKOR
const anchors = document.querySelectorAll('.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//ANKOR

function hideCookie(){
  document.getElementById('cookie').style.display = 'none'
}