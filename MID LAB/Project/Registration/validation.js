document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validate()) {
                window.location.href = "login.html";
            }
        });
    }
});

function validate()
{
    let valid = true;   // turns false if ANY check below fails

    // ---------- Name ----------
    let name = document.getElementById("AdminName").value.trim();
    let nameError = document.getElementById("NameError");
    if (name === "")
    {
        nameError.innerHTML = "Enter The Name";
        valid = false;
    }
    else if (name.length < 6)
    {
        nameError.innerHTML = "Name Must be at least 6 Char";
        valid = false;
    }
    else
    {
        nameError.innerHTML = "";
    }

    // ---------- Email ----------
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

    // ---------- Phone ----------
    let phone = document.getElementById("AdminPhone").value.trim();
    let phoneError = document.getElementById("PhoneError");
    let phonePattern = /^01[3-9]\d{8}$/;
    if (phone === "")
    {
        phoneError.innerHTML = "Please Enter The Phone Number";
        valid = false;
    }
    else if (!phonePattern.test(phone))
    {
        phoneError.innerHTML = "Phone Must be 11 Digits, like 01XXXXXXXXX";
        valid = false;
    }
    else
    {
        phoneError.innerHTML = "";
    }

    // ---------- Gender ----------
    let genders = document.querySelectorAll('input[name="gender"]');
    let genderError = document.getElementById("GenderError");
    let selectedGender = "";
    for (let i = 0; i < genders.length; i++)
    {
        if (genders[i].checked)
        {
            selectedGender = genders[i].value;
            break;
        }
    }
    if (selectedGender === "")
    {
        genderError.innerHTML = "Please Select the Gender";
        valid = false;
    }
    else
    {
        genderError.innerHTML = "";
    }

    // ---------- Password ----------
    let password = document.getElementById("AdminPassword").value;
    let passwordError = document.getElementById("PasswordError");
    if (password === "")
    {
        passwordError.innerHTML = "Please Enter The Password";
        valid = false;
    }
    else if (password.length < 8)
    {
        passwordError.innerHTML = "Password Must be at least 8 Char";
        valid = false;
    }
    else if (!/\d/.test(password))
    {
        passwordError.innerHTML = "Password Must Contain at least One Number";
        valid = false;
    }
    else
    {
        passwordError.innerHTML = "";
    }

    // ---------- Confirm Password ----------
    let confirm = document.getElementById("ConfirmPassword").value;
    let confirmError = document.getElementById("ConfirmError");
    if (confirm === "")
    {
        confirmError.innerHTML = "Please Confirm The Password";
        valid = false;
    }
    else if (confirm !== password)
    {
        confirmError.innerHTML = "Passwords Do Not Match";
        valid = false;
    }
    else
    {
        confirmError.innerHTML = "";
    }

    return valid;
}