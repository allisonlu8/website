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
  
  