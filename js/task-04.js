// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const button = {
    remov: document.querySelector("[data-action='decrement']"),
    add: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value"),
};

let counterValue = 0;
const decrement = () => {
    counterValue -= 1;
    button.span.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
};

button.remov.addEventListener('click', decrement);
button.add.addEventListener('click', increment);
