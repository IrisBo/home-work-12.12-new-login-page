function checkPassword() {
    const inputValue = document.getElementById("passwordInput").value;
    const messageElement = document.getElementById("message");

    if (inputValue === "1234") {
      messageElement.textContent = "Password is 6789";
      
      // Display the message for 4 seconds and then clear it
      setTimeout(function() {
        messageElement.textContent = "";
      }, 4000);
    } else {
      messageElement.textContent = "";
    }
  }

