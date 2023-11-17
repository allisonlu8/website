// Add this script in the head of your HTML or in a separate scripts.js file
  // scripts.js
  /*
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Get the target section id from the href attribute
        const sectionId = this.getAttribute('href').substring(1);
  
        // Check if the sectionId matches a specific page
        if (sectionId === 'journey' || sectionId === 'adventure' || sectionId === 'about') {
          // Redirect to the corresponding page
          window.location.href = `${sectionId}.html`;
        } else {
          // Scroll to other sections using smooth scrolling
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  */
 // navbar.js
 /*document.addEventListener("DOMContentLoaded", function () {
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
            window.location.href = "../src/pages/" + targetPage + ".html";
        });
    });
});*/

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


    // Dropdown functionality
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    dropdownBtn.addEventListener('mouseover', function () {
      dropdownContent.style.display = 'block';
    });
  
    dropdownBtn.addEventListener('mouseout', function () {
      dropdownContent.style.display = 'none';
    });
  
    // Handle clicking on dropdown items
    document.querySelectorAll('.dropdown-content a').forEach(item => {
      item.addEventListener('click', function () {
        // Get the href attribute of the clicked item
        const href = this.getAttribute('href');
  
        // Redirect to the corresponding page
        window.location.href = href;
      });
    });
  });
  