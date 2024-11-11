document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");


    if (username === "" || password === "") {
        messageElement.textContent = "Please fill in all fields.";
    } else {
        messageElement.textContent = "";
        alert(`Username: ${username}\nPassword: ${password}`);
    }  
});
