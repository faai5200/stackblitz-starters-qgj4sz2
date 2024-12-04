function changeURL(event, actionUrl) {
  event.preventDefault(); // Prevent the form from submitting normally
  const form = event.target; // Get the form that triggered the submit event
  const formData = new FormData(form); // Create a FormData object to collect form data
  const modal = document.querySelector('.modal'); // Store reference to modal

  fetch(actionUrl, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Handle successful form submission
        showNotification('Your message was sent successfully!'); // Custom notification function
        history.pushState(null, '', 'your-message-was-sent'); // Use dynamic URL if needed
        modal.style.display = 'none'; // Close the modal
        setTimeout(() => {
          window.location.href = './'; // Redirect to homepage
        }, 2000); // Delay in milliseconds
      } else {
        // Handle errors if needed
        showNotification(
          'There was an error sending your message. Please try again.'
        ); // Custom notification function
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      showNotification(
        'Network error. Please check your connection and try again.'
      ); // Custom notification function
    });
}

function showNotification(message) {
  // Implement a user-friendly notification system (e.g., toast messages)
  alert(message); // Placeholder for actual notification implementation
}
