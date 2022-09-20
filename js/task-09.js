// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function randomColor() {
  document.body.style.background = getRandomHexColor();
  span.textContent = getRandomHexColor();
};

button.addEventListener("click", randomColor);
 
