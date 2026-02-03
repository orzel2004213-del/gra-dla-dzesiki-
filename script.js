const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const headerText = document.querySelector("h1");
const gifObj = document.querySelector(".gif");

let scale = 1;
let msgIndex = 0;

const messages = [
  "No 😭",
  "Are you sure?",
  "Pookie please... 🥺",
  "Don't do this!",
  "I'm gonna cry...",
  "You're breaking my heart 💔",
  "Just say YES! ❤️"
];

noBtn.addEventListener("click", () => {
  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  scale *= 1.4;
  
  yesBtn.style.transform = `translate(-50%, 0) scale(${scale})`;

  if (scale > 3) {
      noBtn.style.opacity = "0";
      noBtn.style.pointerEvents = "none";
  }
});

yesBtn.addEventListener("click", () => {
  confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
  });

  document.body.innerHTML = `
    <div style="height:100dvh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg, #ff9a9e, #fecfef); text-align:center;">
      <h1 style="font-size:36px; color:#d6336c; font-family:'Georgia';">She said YES! 💖</h1>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style="width:80%; max-width:300px; border-radius:15px; margin-top:20px;">
    </div>
  `;
});
