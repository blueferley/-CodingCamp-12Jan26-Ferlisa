

// call the function to display the welcome message 
welcomeMessage() ;
// Function to display a welcome message
function welcomeMessage() {
    let userResponse = prompt("What is your name?", "Guest");
    document.getElementById("welcome-speech").innerHTML = "Welcome to Kopikiko, " + userResponse + "!";
}

const   navMenu = document.querySelector(".nav-menu") ;
const   btnMenu = document.querySelector(".btn-menu") ;

btnMenu.onclick = (e) => {
    e.preventDefault() ;
    navMenu.classList.toggle("active");
};

document.addEventListener("click", (e) => {
    if (!btnMenu.contains(e.target) && !navMenu.contains(e.target)) {navMenu.classList.remove("active") ;}
}) ;