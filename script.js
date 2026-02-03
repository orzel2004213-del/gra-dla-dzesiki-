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
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ffffff', '#ff1493']
    });

    document.body.innerHTML = `
    <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff758c,#ff7eb3);text-align:center;font-family:'Comic Sans MS',cursive;padding:20px;color:white;">
      <h1 style="font-size:32px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        SHE SAID YES! 💘🥹<br><br>
        Best girlfriend and valentine in the whole world!<br>
        I love you so much baby❤️❤️❤️
      </h1>
    </div>
  `;
});
