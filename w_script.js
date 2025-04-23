// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    resetTypingEffect();
}

// Typing Effect
const text = "Shweta Yadav";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

function resetTypingEffect() {
    document.getElementById("typing-text").textContent = "";
    i = 0;
    setTimeout(typeEffect, 500);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Random Quote Generator
const quotes = [
    "Innovation distinguishes between a leader and a follower.",
    "Simplicity is the ultimate sophistication.",
    "Design is not just what it looks like. It's how it works."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
