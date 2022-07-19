let clBtn = document.querySelectorAll('.tab__btn')
var tabPanes = document.querySelectorAll(".chars__block");

for (var i = 0; i < clBtn.length; i++) {

    clBtn[i].addEventListener("click", function (e) {
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab");

        for (var j = 0; j < clBtn.length; j++) {
            var contentAttr = tabPanes[j].getAttribute("data-tab-content");

            if (activeTabAttr === contentAttr) {
                clBtn[j].classList.add("active");
                tabPanes[j].classList.add("active__block");
            } else {
                clBtn[j].classList.remove("active");
                tabPanes[j].classList.remove("active__block");
            }
        };
    });
}

let vBtn = document.querySelectorAll('.video__btn')
var tabVideo = document.querySelectorAll(".video__block");

for (var idx = 0; idx < vBtn.length; idx++) {

    vBtn[idx].addEventListener("click", function (e) {
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab-video");

        for (var jdx = 0; jdx < vBtn.length; jdx++) {
            var contentAttr = tabVideo[jdx].getAttribute("data-video");

            if (activeTabAttr === contentAttr) {
                vBtn[jdx].classList.add("active");
                tabVideo[jdx].classList.add("video__active");
            } else {
                vBtn[jdx].classList.remove("active");
                tabVideo[jdx].classList.remove("video__active");
            }
        };
    });
}