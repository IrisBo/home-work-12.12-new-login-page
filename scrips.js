
// function test (){
//     document.write("dbvkhdbvkh")
// }
function checkDetails() {

    const username1 = document.querySelector(".email_1").value
    const password1 = document.querySelector(".password_1").value

    if (username1 === "idanmagl@gmail.com" && password1 === "1234$$") {

        window.location.href = "http://127.0.0.1:5500/my_page.html";

    }
    else {

        alert("username or password incorrect")

    }
}

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

