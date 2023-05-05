function registerUser(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var status = document.getElementById("status");

    if (password !== confirmPassword) {
        status.innerHTML = "Passwords do not match";
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.status === "success") {
                status.innerHTML = response.message;
            } else {
                status.innerHTML = response.message;
            }
        }
    };
    var data = "username=" + username + "&email=" + email + "&password=" + password + "&confirm-password=" + confirmPassword;
    xhr.send(data);
}

var form = document.getElementById("registration-form");
form.addEventListener("submit", registerUser);
