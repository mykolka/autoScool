var slides = document.querySelectorAll('.sliderItem');
var currentSlide = 0;
var slideInterval = setTimeout(nextSlide, 100);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'sliderItem';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'currentItem';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};

let menuBtn = document.querySelector(".smallScreenMenuBtn"),
    menuPopUp = document.querySelector(".mobileMenu"),
    closePopUp = document.querySelector(".closeMenu"),
    menuElement = document.querySelectorAll(".mobileMenu a");

menuBtn.onclick = function () {
    menuPopUp.style.display = "block";
}

closePopUp.onclick = function () {
    menuPopUp.style.display = "none";
}

menuPopUp.onclick = function (e) {

    let targ = e.target;

    menuElement.forEach((el) => {
        if (el === targ) {
            menuPopUp.style.display = "none";
        }
    })
}





