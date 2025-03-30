let xp = 0;
let level = 1;
let xpMax = 50;
function updateXP() {
  document.getElementById('xp').textContent = xp;
  document.getElementById('xp-max').textContent = xpMax;
  document.getElementById('level').textContent = level;
  const bar = document.getElementById('xp-bar');
  bar.style.width = (xp / xpMax * 100) + '%';
}
function checkCode() {
  const code = document.getElementById('editor').value.toLowerCase();
  const result = document.getElementById('result');
  if (code.includes('<h1>') && code.includes('<p>')) {
    result.textContent = 'Sikeres megoldás! +30 XP';
    xp += 30;
    if (xp >= xpMax) {
      xp -= xpMax;
      level++;
      xpMax = Math.floor(xpMax * 1.5);
    }
    updateXP();
  } else {
    result.textContent = 'Hiba: A <h1> és <p> tagok kötelezőek.';
  }
}
function downloadCode() {
  const code = document.getElementById('editor').value;
  const blob = new Blob([code], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bemutatkozas.html";
  a.click();
}
document.getElementById('editor').addEventListener('input', () => {
  document.getElementById('preview').srcdoc = document.getElementById('editor').value;
});
document.getElementById('preview').srcdoc = document.getElementById('editor').value;
document.getElementById('toggle-theme').addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
});
updateXP();
