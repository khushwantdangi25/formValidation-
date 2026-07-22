const f = document.getElementById("myForm");
const Inputname = document.querySelector("#name");
const Inputemail = document.getElementById("email");
const pass = document.getElementById("password");
const message = document.getElementById("message");
const sunmitb = document.querySelector("button[type='submit']");

function check() {
    const n = Inputname.value.trim();
    const email = Inputemail.value.trim();
    if (n !== "" && email !== "") {
        sunmitb.disabled = false;
    } else {
        sunmitb.disabled = true;
    }
}

Inputemail.addEventListener("input", () => {
    if (Inputemail.value.trim() === "") {
        Inputemail.style.border = "3px solid red";
    } else {
        Inputemail.style.border = "3px solid green";
    }
    check();
});

Inputname.addEventListener("input", () => {
    if (Inputname.value.trim() === "") {
        Inputname.style.border = "3px solid red";
    } else {
        Inputname.style.border = "3px solid green";
    }
    check();
});

f.addEventListener("submit", function(e) {
    e.preventDefault();
    message.innerText = "User Registering.....";
});

