const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;
let noScale = 1;
let msgIndex = 0;

const messages = [
    "No 😭",
    "Are you sure? 🤨",
    "Really sure? 🥺",
    "Are you really really sure? 💔",
    "Think again! 🌹",
    "Last chance! 😰",
    "Surely not? 😱",
    "You're breaking my heart... 💔😭",
    "Have a heart! ❤️",
    "Don't do this to me! 😢"
];

noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNo();
});
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    noBtn.innerText = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;

    yesScale += 0.5;
    noScale -= 0.1;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    if (noScale <= 0.3) {
        noBtn.style.opacity = "0.5";
    }
}

yesBtn.addEventListener("click", () => {
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y
