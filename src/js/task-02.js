const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const liIngredients = ingredients.map((ingredient) =>
`<li class = "item">${ingredient}</li>`).join('')

console.log(liIngredients);
list.innerHTML = liIngredients;

