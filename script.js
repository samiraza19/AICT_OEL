function validateForm()
{
    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let guests =
    document.getElementById("guests").value;

    if(
        name === "" ||
        email === "" ||
        guests === ""
    )
    {
        alert("Please fill all fields.");
        return false;
    }

    alert("Table Reserved Successfully!");

    return true;
}

const themeBtn = document.getElementById("themeBtn");

let darkMode = true;

/* Hover Effect */

themeBtn.addEventListener("mouseenter", () => {

    if(darkMode)
    {
        themeBtn.innerHTML = "☀️";
    }
    else
    {
        themeBtn.innerHTML = "🌙";
    }

});

themeBtn.addEventListener("mouseleave", () => {

    if(darkMode)
    {
        themeBtn.innerHTML = "🌙";
    }
    else
    {
        themeBtn.innerHTML = "☀️";
    }

});

/* Theme Toggle */

function toggleTheme()
{
    document.body.classList.toggle("dark");

    darkMode = !darkMode;

    if(darkMode)
    {
        themeBtn.innerHTML = "🌙";
    }
    else
    {
        themeBtn.innerHTML = "☀️";
    }
}

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
        .getElementById("mobileMenu")
        .classList
        .remove("active");

        document
        .querySelector(".menu-btn")
        .innerHTML = "☰";

    });

});

function toggleMenu()
{
    const menu =
    document.getElementById("mobileMenu");

    const btn =
    document.querySelector(".menu-btn");

    menu.classList.toggle("active");

    if(menu.classList.contains("active"))
    {
        btn.innerHTML = "✖";
    }
    else
    {
        btn.innerHTML = "☰";
    }
}