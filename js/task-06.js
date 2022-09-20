// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const input = document.querySelector("#validation-input");
const length = input.dataset.length;

input.addEventListener('blur', onInputChange);

function onInputChange () {
    if (input.value.length === +length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    };
};
