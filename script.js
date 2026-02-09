const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("heart-text");
const buttons = document.getElementById("buttons");

// Нажатие "Да"
yesBtn.addEventListener("click", () => {
  text.textContent = "И я буду твоей Валентинкой!🥰";
  buttons.style.display = "none";
});

// Убегающая кнопка "Нет"
function moveNoButton() {
  const x = Math.random() * 100 - 50;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Для ПК
noBtn.addEventListener("mouseenter", moveNoButton);

// Для телефонов
noBtn.addEventListener("touchstart", moveNoButton);
