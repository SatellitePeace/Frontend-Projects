// VARIABLES
const menuBtn = document.querySelector(".hamburger")
const menuItems = document.querySelector("ul")

// EVENT LISTENERS

// Slide listeners
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-text section");
    const images = document.querySelectorAll(".hero-images figure")
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = 1;
            } else {
                slide.style.opacity = 0;
            }
        });
        images.forEach((img, i) => {
            if (i === index) {
                img.style.opacity = 1
            } else {
                img.style.opacity = 0
            }
        })
    }

    function navigateSlide(direction) {
        if (direction === "left") {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;

            currentSlide = (currentSlide - 1 + images.length) % images.length

        } else if (direction === "right") {
            currentSlide = (currentSlide + 1) % slides.length;

            currentSlide = (currentSlide + 1) % images.length
        }

        showSlide(currentSlide);
    }
    // for click event
    leftButton.addEventListener("click", function () {
        navigateSlide("left");
    });

    rightButton.addEventListener("click", function () {
        navigateSlide("right");
    });
    // for keyboard event
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            navigateSlide("left");
        } else if (event.key === "ArrowRight") {
            navigateSlide("right");
        }
    });

    showSlide(currentSlide);
});


// menu items listeners

menuBtn.addEventListener("click", () => {
    menuItems.classList.toggle("open")
})