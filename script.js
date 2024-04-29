document.addEventListener("DOMContentLoaded", function() {
    let targetScrollY = 0;
    let currentScrollY = window.scrollY;

    function slowScroll(e) {
        e.preventDefault();
        const deltaY = e.deltaY;
        const sensitivity = 0.2; // Adjust sensitivity to control scrolling speed
        targetScrollY += deltaY * sensitivity;
        targetScrollY = Math.max(0, Math.min(targetScrollY, document.documentElement.scrollHeight - window.innerHeight));
        console.log(currentScrollY);
        console.log(deltaY);
        updateScroll();
    }

    function updateScroll() {
        const easing = 0.1; // Adjust easing for smoother scrolling
        const distance = targetScrollY - currentScrollY;
        currentScrollY += distance * easing;

        window.scrollTo(0, currentScrollY);
    }

    document.addEventListener("wheel", slowScroll, { passive: false });
});





window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.opacity = "0";
    loading.style.visibility = "hidden";
    loading.style.transition = "opacity 1s, visibility 1s";

    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
            images[i].addEventListener('load', () => {
                // Image loaded
            });
        }
    }
});

AOS.init({
    once: false,
    mirror: true,
});

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "modern",
      },
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",

            ],
            right: ["slideshow", "thumbs", "close"],
        },
    },
});



$('.mode').click(function() {
    $('html, body, *').toggleClass("dark");
    $(this).toggleClass("off");

    const toggl = $(this);
    toggl.addClass('scaling');
    setTimeout(() => {
        toggl.removeClass('scaling');
    }, 520);
});

filterSelection("all");

function filterSelection(c) {
    const elements = document.getElementsByClassName("filterDiv");
    if (c === "all") {
        c = "";
    }
    for (let i = 0; i < elements.length; i++) {
        w3RemoveClass(elements[i], "show");
        if (elements[i].className.indexOf(c) > -1) {
            w3AddClass(elements[i], "show");
        }
    }
}

function w3AddClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += ` ${arr2[i]}`;
        }
    }
}

function w3RemoveClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function shuffleFilterDivs() {
    const container = document.querySelector('.justified-grid-gallery');
    const images = Array.from(container.querySelectorAll('a'));
    const shuffledImages = shuffleArray(images);
    container.innerHTML = '';
    shuffledImages.forEach(image => {
        container.appendChild(image);
    });
}

function shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const btnContainer = document.getElementById("control-btns");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        const allImages = document.querySelectorAll('.justified-grid-gallery img');
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        shuffleFilterDivs();
        // shuffleFilterDivs();
    });
}
