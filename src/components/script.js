document.addEventListener("DOMContentLoaded", function () {
    // Get the current page filename
    var currentPage = window.location.pathname.split("/").pop();

    // Remove the file extension from the filename
    currentPage = currentPage.replace(".html", "");

    // Add the 'active' class to the corresponding navigation link
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        var linkPage = link.href.split("/").pop().replace(".html", "");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to handle navigation
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target page from the link's href
            var targetPage = this.href.split("/").pop().replace(".html", "");

            // Redirect the user to the target page
            window.location.href = "../pages/" + targetPage + ".html";
        });
    });
});

// components/script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the container for the navigation bar
    var navbarContainer = document.getElementById("navbar-container");

    // Fetch and inject the navbar.html content into the container
    fetch("../components/index.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;

            // Add the 'active' class to the corresponding navigation link
            var currentPage = window.location.pathname.split("/").pop().replace(".html", "");
            var navLinks = document.querySelectorAll("nav a");
            navLinks.forEach(function (link) {
                var linkPage = link.href.split("/").pop().replace(".html", "");
                if (linkPage === currentPage) {
                    link.classList.add("active");
                }
            });

            // Add click event listener to handle navigation
            navLinks.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default behavior of the link
                    var targetPage = this.href.split("/").pop().replace(".html", "");
                    window.location.href = "../pages/" + targetPage + ".html";
                });
            });
        });
});

// components/script.js
document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    var pageTitles = {
        "journey": "Journey",
        "adventure": "Adventure",
        "movement": "Movement",
        "documentation": "Documentation",
        "illustration": "Illustration",
        "about": "About",
        // Add more pages as needed
    };

    // Set the page title and description
    document.getElementById("page-title").innerText = pageTitles[currentPage] || "Unknown Page";
    document.getElementById("page-description").innerText = "Your personalized side description goes here.";

    // Get page-specific information from meta tags
    var pageTitle = document.querySelector('meta[name="title"]').getAttribute("content") || "Unknown Page";
    var pageDescription = document.querySelector('meta[name="description"]').getAttribute("content") || "Your personalized side description goes here.";

    // Set the page title and description
    document.getElementById("page-title").innerText = pageTitle;
    document.getElementById("page-description").innerText = pageDescription;

});


/*For section selection in adventure */
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// for the slider photos
function createSlider(sliderId, slidePrefix, imageCount) {
    var slideIndex = 1;

    function plusSlides(n) {
        showSlides((slideIndex += n), sliderId);
    }

    function currentSlide(n) {
        showSlides((slideIndex = n), sliderId);
    }

    function showSlides(n, id) {
        var i;
        var slides = document.querySelectorAll(`#${id} .slide`);
        var thumbnails = document.querySelectorAll(`#${id} .thumbnail`);
        var thumbnailsContainer = document.querySelector(`#${id} .thumbnails`);

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            thumbnails[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        thumbnails[slideIndex - 1].classList.add("active");

        // Scroll the thumbnails container to make the current thumbnail visible
        var thumbnailIndex = Math.min(slideIndex - 1, thumbnails.length - 1);
        thumbnailsContainer.scrollLeft =
            thumbnailIndex * (thumbnails[0].offsetWidth + 5);
    }

    function nextSlide() {
        plusSlides(1);
    }

    function prevSlide() {
        plusSlides(-1);
    }

    function autoSlide() {
        plusSlides(1);
        setTimeout(autoSlide, 3000); // Change slide every 3 seconds
    }

    // Start automatic sliding
    setTimeout(autoSlide, 3000);

    // Return the slide index and functions for external control
    return {
        slideIndex: slideIndex,
        nextSlide: nextSlide,
        prevSlide: prevSlide,
        currentSlide: currentSlide
    };
}

// Create sliders
var slider1 = createSlider("slider1", "slide1_", 3);
var slider2 = createSlider("slider2", "slide2_", 3);
var slider3 = createSlider("slider3", "slide3_", 3);

