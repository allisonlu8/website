/*// Add this script in the head of your HTML or in a separate scripts.js file
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });*/
  // scripts.js
  /*
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth'
          });
        }
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
  });
  
  */
/*
  // scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth'
          });
        }
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
  */


  // scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Get the target section id from the href attribute
        const sectionId = this.getAttribute('href').substring(1);
  
        // Check if the sectionId matches a specific page
        if (sectionId === 'Journey' || sectionId === 'Adventure' || sectionId === 'About') {
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
  