function validateEmail(event) {
      // Get the email input value
      var emailInput = document.getElementById('emailInput');
      var email = emailInput.value;

      // Define a regular expression for email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the email matches the regular expression
      if (!emailRegex.test(email)) {
        // If not valid, prevent form submission and show an error message
        alert('Please enter a valid email address.');
        event.preventDefault();
      } else {
        alert("hello world");
      }
}
