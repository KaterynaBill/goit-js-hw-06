const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value');

let counter = 0;

const increment = () => {
  counter += 1;
  counterValue.textContent = counter;
};

const decrement = () => {
  counter -= 1;
  counterValue.textContent = counter;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
