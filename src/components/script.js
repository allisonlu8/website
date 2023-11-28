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

/*
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

        // Add click event listener to handle navigation
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target page from the link's href
            var targetPage = this.href.split("/").pop().replace(".html", "");

            // Redirect the user to the target page
            window.location.href = "../pages/" + targetPage + ".html";
        });
    });
});
*/