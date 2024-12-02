// Select all navigation links
const navHighlightLinks = document.querySelectorAll(".nav-links ul li a");

// Get the current URL path
const currentPath = window.location.pathname.split("/").pop(); // Get only the file name
console.log("Current Path:", currentPath);

// Loop through each link
navHighlightLinks.forEach(link => {
    console.log("Checking link:", link.getAttribute("href"));
    if (link.getAttribute("href").split("/").pop() === currentPath) {
        console.log("Match found:", link.getAttribute("href"));
        link.classList.add("active");
    }
});
