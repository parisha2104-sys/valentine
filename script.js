document.getElementById("yesBtn").onclick = function () {
  alert("YAYYYY 💖 I LOVE YOU FOREVER 💍🌹");
};

document.getElementById("noBtn").onclick = function () {
  this.style.position = "absolute";
  this.style.top = Math.random() * window.innerHeight + "px";
  this.style.left = Math.random() * window.innerWidth + "px";
};
