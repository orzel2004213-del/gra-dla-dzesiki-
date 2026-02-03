const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;
let msgIndex = 0;

const messages = [
  "No 😭",
  "Are you sure?",
  "Pookie please... 🥺",
  "Think again!",
  "I'm gonna cry...",
  "You're breaking my heart 💔"
];

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", () => {
  moveButton();
  
  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
  
  scale *= 1.8;
  yesBtn.style.transform = `scale(${scale})`;

  if (scale > 10) {
    noBtn.style.display = "none";
  }
});

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  document.body.innerHTML = `
    <div style="height:100dvh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#ffb6c1; text-align:center; padding:20px;">
      <h1 style="font-size:30px; color:#d6336c; font-family:sans-serif;">YAYYY SHE SAID YESSS!<br>I LOVE YOU DZESIKAAAAAAAA ❤️❤️❤️</h1>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style="width:80%; max-width:300px; border-radius:15px; margin-top:20px;">
    </div>
  `;
});
