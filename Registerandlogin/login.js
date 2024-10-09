window.onload = function() {
    document.getElementById("myLogin").onsubmit = checkLogin;
};

function checkLogin(event) {
    event.preventDefault(); 

    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var registeredUsername = localStorage.getItem("registeredUsername");
    var registeredPassword = localStorage.getItem("registeredPassword");

 
    if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
        alert("Login successful");
    
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง");
    }
}








