document.addEventListener('DOMContentLoaded', function() {
  // Check if the URL has a success parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    // Show success message
    const statusElement = document.getElementById('contact-form-status');
    if (statusElement) {
      statusElement.innerHTML = '<div class="alert alert-success">Thank you for your message! It has been sent successfully.</div>';
      // Remove the success parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  // Handle form submission with AJAX for better UX
  const form = document.querySelector('form[name="contact"]');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const statusElement = document.getElementById('contact-form-status');
      
      // Disable submit button and show loading
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => {
        // Show success message
        statusElement.innerHTML = '<div class="alert alert-success">Thank you for your message! It has been sent successfully.</div>';
        form.reset();
      })
      .catch((error) => {
        // Show error message
        statusElement.innerHTML = '<div class="alert alert-danger">Oops! There was a problem sending your message. Please try again.</div>';
        console.error('Error:', error);
      })
      .finally(() => {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      });
    });
  }
});
