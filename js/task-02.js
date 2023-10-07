const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
const listItemArray = [];

ingredients.forEach((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  listItemArray.push(listItem);
});

ingredientsList.append(...listItemArray);
