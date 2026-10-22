
function showMessage() {
    alert("Welcome to my portfolio! Thanks for visiting.");
    
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function contactMe() {
    window.location.href = "mailto:umair@example.com";
}
function showDateTime() {
    const now = new Date();

    document.getElementById("datetime").textContent =
        "Current date and time: " + now.toLocaleString();
}

// New feature: change the website theme
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}