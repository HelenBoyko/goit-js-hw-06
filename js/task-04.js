
const countValue = document.querySelector('#value');

const btnDecrease = document.querySelector('[data-action="decrement"]');
const btnIncrease = document.querySelector('[data-action="increment"]');

function decrease() {
    countValue.innerHTML = Number(countValue.innerHTML) - 1;
    return countValue;
}
function increase() {
 countValue.innerHTML = Number(countValue.innerHTML) + 1;
    return countValue;
}
btnDecrease.addEventListener('click', decrease);
btnIncrease.addEventListener('click', increase);