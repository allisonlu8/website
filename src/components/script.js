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
    fetch("../components/header.html")
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

document.addEventListener("DOMContentLoaded", function () {
    const sectionPageMap = {
        "about-me": "about.html",
        "coding-projects": "coding-projects.html",
        "design": "ux-projects.html",
        "whobao": "whobao.html",
        "futureme": "futureme.html",
        "movement": "movement.html",
        "documentation": "documentation.html",
        "illustration": "illustration.html",
        "journey": "journey.html",
        "adventure": "adventure.html"
        // Add more mappings as needed
    };
    const externalLinks = {
        "website": "https://github.com/allisonlu8/website",
        "currency-exchange": "https://github.com/allisonlu8/CurrencyExchange",
        "fraud": "https://github.com/allisonlu8/Credit_Card_Fraud_Detection" 
        // Add more mappings as needed

    };

    const clickableSections = document.querySelectorAll(".clickable-section");

    clickableSections.forEach((section) => {
        section.addEventListener("click", function () {
            const sectionId = this.id;
            const pageName = sectionPageMap[sectionId];
            if (pageName) {
                window.location.href = pageName;
            }
            const externalLink = externalLinks[sectionId];
            if (externalLink) {
                window.open(externalLink, "_blank"); // Open link in a new tab
            }
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
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
function createSlider(sliderId) {
    var slideIndex = 1;
    var slideTimer;

    function plusSlides(n) {
        clearTimeout(slideTimer); // Reset the timer
        showSlides((slideIndex += n), sliderId);
        slideTimer = setTimeout(autoSlide, 2500); // Restart the timer
    }

    function currentSlide(n) {
        clearTimeout(slideTimer); // Reset the timer
        showSlides((slideIndex = n), sliderId);
        slideTimer = setTimeout(autoSlide, 2500); // Restart the timer
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
        // setTimeout(autoSlide, 3000); // Change slide every 3 seconds
    }

    // Start automatic sliding
    slideTimer = setTimeout(autoSlide, 3000);

    // Start automatic sliding
    //setTimeout(autoSlide, 3000);

    // Event listeners for arrow buttons
    document.querySelector(`#${sliderId} .prev`).addEventListener("click", function () {
        prevSlide();
    });

    document.querySelector(`#${sliderId} .next`).addEventListener("click", function () {
        nextSlide();
    });

    // Event listeners for thumbnails
    var thumbnailElements = document.querySelectorAll(`#${sliderId} .thumbnail`);
    thumbnailElements.forEach(function (thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            currentSlide(index + 1);
        });
    });

    // Return the slide index and functions for external control
    return {
        slideIndex: slideIndex,
        nextSlide: nextSlide,
        prevSlide: prevSlide,
        currentSlide: currentSlide
    };
}

// Create sliders
var slider1 = createSlider("slider1");
var slider2 = createSlider("slider2");