function validateEmail(event) {
  // Get the email input value
  var emailInput = document.getElementById('emailInput');
  var email = emailInput.value;
  if (!emailInput.checkValidity()) {
        // Display an error message or perform other actions
        alert("Invalid email address");
        event.preventDefault(); // Prevent form submission
  } else {
    successMessage(email);
  }
  

}

function successMessage(email) {
  var container = document.querySelector(".container");
  var successMessage = document.querySelector(".success-container");
  container.style.display = 'none';
  successMessage.style.display = 'flex';
//   Adding message to the HTML

  var message = document.getElementById("success-message");
  message.innerHTML = "A confirmation email has been sent to\n" +
    "<b>" + email + "</b>. " + "Please open it and click the button inside to\n" +
    "        confirm your subscription. Dismiss message"

}

var buttonBack = document.getElementById("success-button");
buttonBack.addEventListener("click", function () {
  window.location.reload();
})




