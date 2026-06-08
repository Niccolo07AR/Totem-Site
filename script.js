let timeout;

// cambia schermata
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ritorno automatico
function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    showScreen("idle");
  }, 30000);
}

// click SOLO se sei in idle
document.addEventListener("click", (e) => {
  if (document.getElementById("idle").classList.contains("active")) {
    showScreen("home");
  }
  resetTimer();
});

// bottone back
function goBack(event) {
  event.stopPropagation(); // IMPORTANTISSIMO
  showScreen("idle");
}

// slideshow immagini
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 5000);

// avvio
resetTimer();
``
