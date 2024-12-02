// script.js

// JavaScript to make the navbar sticky
window.onscroll = function() { stickyNav() };

const navbar = document.querySelector("nav");
const stickyOffset = navbar.offsetTop;

function stickyNav() {
    if (window.scrollY >= stickyOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
