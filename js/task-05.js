// Напиши скрипт, який під час набору тексту в інпуті 
// input#name-input (подія input), підставляє його поточне значення в 
// span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок 
// "Anonymous".

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (input.value === "") {
        span.textContent = "Anonymous"
    } else {
        span.textContent = event.currentTarget.value;
    }
}





