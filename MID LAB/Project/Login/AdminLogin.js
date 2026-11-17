const ADMIN_EMAIL = "admin@mail.com";
const ADMIN_PASSWORD = "4321";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validate()) {
                window.location.href = "../Dashboard/dashboard.html";
            }
        });
    }
});

function validate()
{
    let valid = true;

    let email = document.getElementById("AdminEmail").value.trim();
    let emailError = document.getElementById("EmailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "")
    {
        emailError.innerHTML = "Please Enter The Email";
        valid = false;
    }
    else if (!emailPattern.test(email))
    {
        emailError.innerHTML = "Please Enter The Right Email Format";
        valid = false;
    }
    else
    {
        emailError.innerHTML = "";
    }

    let password = document.getElementById("AdminPassword").value;
    let passwordError = document.getElementById("PasswordError");
    if (password === "")
    {
        passwordError.innerHTML = "Please Enter The Password";
        valid = false;
    }
    else
    {
        passwordError.innerHTML = "";
    }

    let loginError = document.getElementById("LoginError");
    if (valid)
    {
        if (email.toLowerCase() !== ADMIN_EMAIL || password !== ADMIN_PASSWORD)
        {
            loginError.innerHTML = "Wrong Email or Password";
            valid = false;
        }
        else
        {
            loginError.innerHTML = "";
        }
    }
    else
    {
        loginError.innerHTML = "";
    }

    return valid;
}