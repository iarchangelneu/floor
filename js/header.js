// HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("scroll", onScrollheader)
    onScrollheader()
});

function onScrollheader() {
    let hd = document.getElementById("header")
    let h = window.pageYOffset
    let menuItems = document.getElementsByClassName("menu-item")
    let headerImage = document.querySelector(".nav__logo");
    // let ho = document.getElementById("headerOrder")

    if (h > 5) {
        // for (let i = 0; i < menuItems.length; i++) {
        //      menuItems[i].style.color = 'rgba(8, 33, 81, 1)';
        // }

        // ho.style.color = "var(--accent)"
        hd.style.backgroundColor = "#FFFFFF"
        // hd.class
        // headerImage.src = "img/logoRed.png"
        hd.classList.add("navShadow")
    } else {
        // for (let i = 0; i < menuItems.length; i++) {
        //     menuItems[i].style.color = 'white';
        // }

        // ho.style.color = "white"
        // hd.style.backgroundColor = "rgba(0, 0, 0, 0)"
        hd.classList.remove("navShadow")
        // headerImage.src = "img/logowhite.png"
    }
}
// HEADER ON SCROLL