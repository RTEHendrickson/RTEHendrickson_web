function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(function(section) {
      section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    // Remove outline and red color from all links
    document.querySelectorAll('.navbar ul li a').forEach(function(link) {
      link.classList.remove('selected');
    });
    // Add outline to the selected link
    document.querySelector('.navbar ul li a[href="#' + sectionId + '"]').classList.add('selected');
  }
  
  // Set the initial section to be shown (home)
  showSection('home');