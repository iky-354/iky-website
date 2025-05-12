let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.remove("visible");
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
        navbar.classList.add("visible");
    }

    lastScrollTop = scrollTop;
});

function sapa(nama) {
    return "halo," + nama + "!";
}

console.log(sapa("irsyad"));

const ab = document.getElementById('ABOUT');
const abSection = document.getElementById('sec-2');

ab.addEventListener('click', function (event) {
    event.preventDefault();
    abSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});



const pt = document.getElementById('PORTFOLIO');
const p = document.getElementById('sec-3');

pt.addEventListener('click', function (event) {
    event.preventDefault();
    p.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



const f = document.getElementById('H');
const hSection = document.getElementById('sec-1');

f.addEventListener('click', function (event) {
    event.preventDefault();
    hSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const fullscreenTitle = document.getElementById('fullscreen-title');
    const fullscreenDescription = document.getElementById('fullscreen-description');
    const closeBtn = document.querySelector('.close');

    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            fullscreen.style.display = 'flex';
            fullscreenImg.src = this.src;
            fullscreenTitle.textContent = this.nextElementSibling.querySelector('h3').textContent;
            fullscreenDescription.textContent = this.nextElementSibling.querySelector('p').textContent;
        });
    });

    closeBtn.addEventListener('click', function() {
        fullscreen.style.display = 'none';
    });

    fullscreen.addEventListener('click', function(event) {
        if (event.target === fullscreen) {
            fullscreen.style.display = 'none';
        }
    });
});


const ff = document.getElementById('CONTACT');
const hfSection = document.getElementById('sec-4');

ff.addEventListener('click', function (event) {
    event.preventDefault();
    hfSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});