const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const themeBtn = document.getElementById("theme-toggle");

// Page load par theme check karo
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Button click
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    }
});
