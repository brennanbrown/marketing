// Custom smooth scrolling for navigation anchors
document.addEventListener('DOMContentLoaded', function() {
  // Disable theme's smooth scroll to prevent conflicts
  const themeScrollLinks = $('.scroll');
  if (themeScrollLinks && themeScrollLinks.off) {
    themeScrollLinks.off('click');
  }
  
  // Get all navigation links with scroll class (theme's approach)
  const navLinks = document.querySelectorAll('.navbar-nav .scroll');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Handle anchor links (start with #)
      if (href && href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          e.preventDefault();
          
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
          
          // Smooth scroll to target with proper offset
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20; // 20px extra padding
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update active state
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });
});
