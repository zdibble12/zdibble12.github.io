// Select the hamburger menu and nav links
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

// Add click event listener to the hamburger menu
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Toggle the 'show' class on nav-links
    hamburgerMenu.classList.toggle("active"); // Toggle the 'active' class on the hamburger menu
});
