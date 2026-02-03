const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;
let noScale = 1;

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

    // YES rośnie, NO maleje
    yesScale += 0.4;
    noScale -= 0.15;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    if (noScale <= 0) {
        noBtn.style.display = "none";
    }
}

yesBtn.addEventListener("click", () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    document.body.innerHTML = `
    <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff758c,#ff7eb3);text-align:center;font-family:'Comic Sans MS',cursive;padding:20px;color:white;">
      <h1 style="font-size:34px;">SHE SAID YES 💘🥹</h1>
      <p style="font-size:24px;">Best girlfriend and valentine in the whole world! I love you so much baby❤️❤️❤️</p>
    </div>
  `;
});
