const messages = [
  "▽ Muito bem! ▽",
  "▽ Ebaa!! ＼(＾▽＾)／ ▽",
  "▽ que legal! ▽"
];

const button = document.getElementById("showTextButton");
const hiddenMessage = document.getElementById("message");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  hiddenMessage.textContent = messages[randomIndex];
  hiddenMessage.style.display = "block";
});
