document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            if (!collect_data()) {
                event.preventDefault();
            }
        });
    }
});

function collect_data()
{
    let validName = validateName();
    let validID = validateID();
    let validEmail = validateEmail();

    return validName && validID && validEmail;
}

function validateName()
{
    let Sname = document.getElementById("StudentName").value.trim();
    let Error = document.getElementById("NameError");
    if (Sname == "")
    {
        Error.innerHTML = "Enter The Name";
        return false;
    }
    else if (Sname.length < 6)
    {
        Error.innerHTML = "Name Must be at least 6 Char";
        return false;
    }
    else
    {
        Error.innerHTML = "Student Name: " + Sname;
        return true;
    }
}

function validateID()
{
    let Sid = document.getElementById("StudentID").value.trim();
    let Error = document.getElementById("IDError");
    let regexpression = /^\d{2}-\d{5}-\d$/;
    if (Sid === "")
    {
        Error.innerHTML = "Please Enter The ID";
        return false;
    }
    else if (!regexpression.test(Sid))
    {
        Error.innerHTML = "ID Must be in XX-XXXXX-X Format";
        return false;
    }
    else
    {
        Error.innerHTML = "Student ID: " + Sid;
        return true;
    }
}

function validateEmail()
{
    let Email = document.getElementById("StudentEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Email === "")
    {
        Error.innerHTML = "Please Enter The Email";
        return false;
    }
    else if (!regexpression.test(Email))
    {
        Error.innerHTML = "Please Enter The Right Email Format";
        return false;
    }
    else
    {
        Error.innerHTML = "Student Email: " + Email;
        return true;
    }
}