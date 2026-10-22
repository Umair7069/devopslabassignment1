
function showMessage() {
    alert("Welcome to my portfolio! Thanks for visiting.");
    
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function contactMe() {
    window.location.href = "mailto:umair@example.com";
}
