const btnRandom = document.querySelector("#random-btn");

function moveraleatorio(btn) {
  // 1. Volver al sitio original para poder medir bien
  btn.style.transform = "translate(0, 0)";
  const rect = btn.getBoundingClientRect();

  // 2. Elegir un punto random dentro de la ventana
  const margen = 5;
  const xMax = Math.max(margen, window.innerWidth - rect.width - margen);
  const yMax = Math.max(margen, window.innerHeight - rect.height - margen);

  const x = margen + Math.random() * (xMax - margen);
  const y = margen + Math.random() * (yMax - margen);

  // 3. Moverlo visualmente (sin sacarlo del flujo)
  btn.style.transform = `translate(${x - rect.left}px, ${y - rect.top}px)`;
}

btnRandom.addEventListener("mouseenter", function (e) {
  moveraleatorio(e.target);
});