function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString("en-GB");
}

setInterval(updateClock, 1000);
updateClock();
