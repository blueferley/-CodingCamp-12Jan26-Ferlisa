document.addEventListener("DOMContentLoaded", () => {

    // TYPING
    const element = document.getElementById("welcome-speech");
    const userResponse = prompt("What is your name?", "Guest") || "Guest";
    const text = `Welcome to Kopikiko, ${userResponse}!`;

    let index = 0;
    element.innerHTML = "";

    function typeText() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 20); 
        }
    }
    typeText();

    // FADE IN UNTUK ELEMENTS DENGAN CLASS fade
    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 400);
    });

    // NAV MENU
    const navMenu = document.querySelector(".nav-menu");
    const btnMenu = document.querySelector(".btn-menu");

    btnMenu.onclick = (e) => {
        e.preventDefault();
        navMenu.classList.toggle("active");
    };

    document.addEventListener("click", (e) => {
        if (!btnMenu.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove("active");
        }
    });

    // FORM CONTACT US
    const form = document.getElementById("messageForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("messageText").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        result.innerHTML = `
            <h3>Message Received</h3>
            <div class="result-content">
                <p class="result-name"><strong>Name:</strong> ${name}</p>
                <p class="result-email"><strong>Email:</strong> ${email}</p>
                <p class="result-message"><strong>Message:</strong> ${message}</p>
            </div>
        `;
        form.reset();
    });

    // ANIMASI CARD
    const cards = document.querySelectorAll(".card");
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });
    cards.forEach(card => cardObserver.observe(card));

    // ANIMASI ABOUT SECTION
    const aboutImage = document.querySelector(".about-image img");
    const aboutTexts = document.querySelectorAll(".about-text p");

    const aboutImgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('zoom');
            else entry.target.classList.remove('zoom');
        });
    }, { threshold: 0.3 });
    aboutImgObserver.observe(aboutImage);

    const aboutTextObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
            else entry.target.classList.remove('show');
        });
    }, { threshold: 0.6 });
    aboutTexts.forEach(text => aboutTextObserver.observe(text));

    // ANIMASI MESSAGE SECTION
    const messageSection = document.querySelector("#message");
    const messageElements = messageSection.querySelectorAll("h2, input, textarea");
    const sendButton = messageSection.querySelector("button");

    const messageTextObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
            else entry.target.classList.remove('show');
        });
    }, { threshold: 0.3 });
    messageElements.forEach(el => messageTextObserver.observe(el));

    const messageButtonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('zoom');
            else entry.target.classList.remove('zoom');
        });
    }, { threshold: 0.3 });
    messageButtonObserver.observe(sendButton);

});
