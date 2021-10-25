const main = document.querySelector("main");
const header = document.querySelector("header");
const headerLink = document.querySelectorAll("header a");
const btnContact = document.getElementById("btn-contact");
const btnPortfolio = document.getElementById("btn-portfolio");
const navHome = document.getElementById("nav-home");
const arrowAbout = document.getElementById("arrow-about");
const navAbout = document.getElementById("nav-about");
const arrowPortfolio = document.getElementById("arrow-portfolio");
const navPortfolio = document.getElementById("nav-portfolio");
const arrowContact = document.getElementById("arrow-contact");
const navContact = document.getElementById("nav-contact");
const navMenu = document.getElementById("nav-menu");
const navToggleable = document.querySelector(".nav-toggleable");
const logo = document.querySelector(".logo");

function changeNavColor() {
    let color;
    let backgroundColor;
    let filter;
    switch (main.style.top) {
        case "-100vh":
            if (window.innerWidth > 900) {
                backgroundColor = "transparent";
                color = "#006eb3";
            } else {
                backgroundColor = "#006eb3e2";
                color = "#efefef";
            }
            filter = "none";
            break;
        case "-300vh":
            if (window.innerWidth > 900) {
                backgroundColor = "transparent";
                color = "#004672";
            } else {
                backgroundColor = "#004672e2";
                color = "#ffbd61";
            }
            filter = "none";
            break;
        default:
            if (window.innerWidth > 900) {
                backgroundColor = "transparent";
                color = "#efefef";
            } else {
                backgroundColor = "#efefefe2";
                color = "#006eb3";
            }
            filter = "brightness(0) invert(1)";
            break;
    }
    navToggleable.style.backgroundColor = backgroundColor;
    navHome.style.color = color;
    navAbout.style.color = color;
    navPortfolio.style.color = color;
    navContact.style.color = color;
    logo.style.filter = filter;
}
function showHide() {
    header.className = "";
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            header.className = "showHide";
        });
    });
}
function goToHome() {
    main.style.top = "0";
    headerLink.forEach((element) => {
        element.style.color = "#efefef";
    });
    checkForWindowResize();
    header.className = "";
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            header.className = "delayedEntrance";
        });
    });
}
function goToAbout() {
    main.style.top = "-100vh";
    headerLink.forEach((element) => {
        element.style.color = "#006eb3";
    });
    checkForWindowResize();
    showHide();
}
function goToPortfolio() {
    main.style.top = "-200vh";
    headerLink.forEach((element) => {
        element.style.color = "#efefef";
    });
    checkForWindowResize();
    showHide();
}
function goToContact() {
    main.style.top = "-300vh";
    headerLink.forEach((element) => {
        element.style.color = "#004672";
    });
    checkForWindowResize();
    showHide();
}
function toggleNav() {
    if (navToggleable.style.display == "flex") {
        navToggleable.style.display = "none";
    } else {
        navToggleable.style.display = "flex";
    }
}
function checkForWindowResize() {
    if (window.innerWidth > 900) {
        navToggleable.style.display = "flex";
    } else {
        navToggleable.style.display = "none";
    }
    changeNavColor();
}

window.addEventListener("resize", checkForWindowResize);
navHome.addEventListener("click", goToHome);
arrowAbout.addEventListener("click", goToAbout);
navAbout.addEventListener("click", goToAbout);
btnPortfolio.addEventListener("click", goToPortfolio);
arrowPortfolio.addEventListener("click", goToPortfolio);
navPortfolio.addEventListener("click", goToPortfolio);
btnContact.addEventListener("click", goToContact);
arrowContact.addEventListener("click", goToContact);
navContact.addEventListener("click", goToContact);
navMenu.addEventListener("click", toggleNav);
