const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  scale += 0.25;
  yesBtn.style.transform = `translateX(-50%) scale(${scale})`;
}

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff758c,#ff7eb3);
      text-align:center;
      font-family:Comic Sans MS;
      padding:20px;
    ">
      <h1 style="font-size:32px;color:white;">
        SHE SAID YES 💘🥹<br>
        Best girlfriend and valentine in the whole world i love you so much baby❤️❤️❤️
      </h1>
    </div>
  `;
});
