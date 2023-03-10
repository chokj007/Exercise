const Class = document.getElementsByClassName("grid");
const audio = document.getElementById("Audio");

div.addEventListener("mouseenter", () => {
  audio.play();
});

div.addEventListener("mouseleave", () => {
  audio.pause();
  audio.currentTime = 0;
});