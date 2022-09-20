// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liEl = ingredients.map((ingredient) => {
  const tegEl = document.createElement('li');
  tegEl.classList.add("item");
  tegEl.textContent = ingredient;
  return tegEl;
});

const ulEL = document.querySelector('#ingredients');
ulEL.append(...liEl);

