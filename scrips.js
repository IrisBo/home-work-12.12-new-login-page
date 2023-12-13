
// function test (){
//     document.write("dbvkhdbvkh")
// }
function checkDetails() {

    const username1 = document.querySelector(".email_1").value
    const password1 = document.querySelector(".password_1").value

    if (username1 === "1@" && password1 === "1234") {

        window.location.href = "http://127.0.0.1:5500/my_page.html";

    }
    else {

        alert("username or password incorrect")

    }
}

function getPassword() {

    const username1 = document.querySelector(".text_1").value
    let password = document.querySelector("#my_password")
    if (username1 === "1@") {
        password.textContent = "1234"
        console.log(password)
    }
    else {

        alert("try again")

    }

}