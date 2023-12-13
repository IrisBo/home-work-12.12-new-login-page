
// function test (){
//     document.write("dbvkhdbvkh")
// }
function checkDetails() {

    const username1 = document.querySelector(".email_1").value
    const password1 = document.querySelector(".password_1").value

    if (username1 == "1@gmail" && password1 == "1234") {

        window.location.href = "http://127.0.0.1:5500/my_page.html";

    }
    else {

        alert("username or password incorrect")

    }
}

