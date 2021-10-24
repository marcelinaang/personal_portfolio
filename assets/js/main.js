const main = document.querySelector("main");
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

function changeNavColor() {
    switch (main.style.top) {
        case "-100vh":
            if (window.innerWidth > 900) {
                navToggleable.style.backgroundColor = "#efefef";
                navHome.style.color = "#006eb3";
                navAbout.style.color = "#006eb3";
                navPortfolio.style.color = "#006eb3";
                navContact.style.color = "#006eb3";
            } else {
                navToggleable.style.backgroundColor = "#006eb3e2";
                navHome.style.color = "#efefef";
                navAbout.style.color = "#efefef";
                navPortfolio.style.color = "#efefef";
                navContact.style.color = "#efefef";
            }
            break;
        case "-200vh":
            if (window.innerWidth > 900) {
                navToggleable.style.backgroundColor = "#006eb3";
                navHome.style.color = "#efefef";
                navAbout.style.color = "#efefef";
                navPortfolio.style.color = "#efefef";
                navContact.style.color = "#efefef";
            } else {
                navToggleable.style.backgroundColor = "#efefefe2";
                navHome.style.color = "#006eb3";
                navAbout.style.color = "#006eb3";
                navPortfolio.style.color = "#006eb3";
                navContact.style.color = "#006eb3";
            }
            break;
        case "-300vh":
            if (window.innerWidth > 900) {
                navToggleable.style.backgroundColor = "#ffbd61";
                navHome.style.color = "#004672";
                navAbout.style.color = "#004672";
                navPortfolio.style.color = "#004672";
                navContact.style.color = "#004672";
            } else {
                navToggleable.style.backgroundColor = "#004672e2";
                navHome.style.color = "#ffbd61";
                navAbout.style.color = "#ffbd61";
                navPortfolio.style.color = "#ffbd61";
                navContact.style.color = "#ffbd61";
            }
            break;
        default:
            if (window.innerWidth > 900) {
                navToggleable.style.backgroundColor = "transparent";
                navHome.style.color = "#efefef";
                navAbout.style.color = "#efefef";
                navPortfolio.style.color = "#efefef";
                navContact.style.color = "#efefef";
            } else {
                navToggleable.style.backgroundColor = "#efefefe2";
                navHome.style.color = "#006eb3";
                navAbout.style.color = "#006eb3";
                navPortfolio.style.color = "#006eb3";
                navContact.style.color = "#006eb3";
            }
            break;
    }
}
function goToHome() {
    main.style.top = "0";
    headerLink.forEach((element) => {
        element.style.color = "#efefef";
    });
    checkForWindowResize();
}
function goToAbout() {
    main.style.top = "-100vh";
    headerLink.forEach((element) => {
        element.style.color = "#006eb3";
    });
    checkForWindowResize();
}
function goToPortfolio() {
    main.style.top = "-200vh";
    headerLink.forEach((element) => {
        element.style.color = "#efefef";
    });
    checkForWindowResize();
}
function goToContact() {
    main.style.top = "-300vh";
    headerLink.forEach((element) => {
        element.style.color = "#004672";
    });
    checkForWindowResize();
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
