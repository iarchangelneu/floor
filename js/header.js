// HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function (event) {
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
    if (window.innerWidth > 480) {
      hd.style.backgroundColor = "rgba(0,0,0,0)"
    }
    hd.classList.remove("navShadow")
  }
}
// HEADER ON SCROLL


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

function hideCookie() {
  document.getElementById('cookie').style.display = 'none'
  localStorage.setItem('cookieAcc', true)
}

function closePreHeader() {
  document.querySelector('.preHeader').style.display = 'none'
  document.querySelector('#header').style.top = '0px'
}

window.onload = function () {
  let cock = document.getElementById('cookie')
  if (!localStorage.getItem('cookieAcc')) {
    cock.classList.add('cookiesD')
  }
}