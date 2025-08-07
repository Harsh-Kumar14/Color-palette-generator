function generatecolor() {
  const color = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + color.padStart(6, '0');
}

function setcol() {
  for (let i = 1; i <= 5; i++) {
    const col = generatecolor();
    const box = document.getElementById(`color${i}`);
    box.style.backgroundColor = col;
    box.textContent = col;
  }
}

function changeBodyColor(event) {
  const color = event.target.textContent;
  document.body.style.backgroundColor = color;
}

const button = document.getElementById("generate-btn");
button.addEventListener("click", setcol);

for (let i = 1; i <= 5; i++) {
  const box = document.getElementById(`color${i}`);
  box.addEventListener("click", changeBodyColor);
}


setcol();
