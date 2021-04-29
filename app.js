const addInputEl1 = document.getElementById ('add-input-1');
const addInputEl2 = document.getElementById ('add-input-2');
const addButtonEl = document.getElementById ('add-button');
const addResultsEl = document.getElementById ('add-result')

addButtonEl.addEventListener('click', function() {
    const number1 = addInputEl1.value;
    const number2 = addInputEl2.value;
const sum = Number(number1) + Number(number2);
addResultsEl.textContent = sum;
})




const subInputEl1 = document.getElementById ('sub-input-1');
const subInputEl2 = document.getElementById ('sub-input-2');
const subButtonEl = document.getElementById ('sub-button');
const subResultsEl = document.getElementById ('sub-result')

subButtonEl.addEventListener('click', function() {
    const number3 = subInputEl1.value;
    const number4 = subInputEl2.value;
const difference = Number(number3) - Number(number4);
subResultsEl.textContent = difference;
})



const multInputEl1 = document.getElementById ('mult-input-1');
const multInputEl2 = document.getElementById ('mult-input-2');
const multButtonEl = document.getElementById ('mult-button');
const multResultsEl = document.getElementById ('mult-result')

multButtonEl.addEventListener('click', function() {
    const number5 = multInputEl1.value;
    const number6 = multInputEl2.value;
const product = Number(number5) * Number(number6);
multResultsEl.textContent = product;
})


const diviInputEl1 = document.getElementById ('divi-input-1');
const diviInputEl2 = document.getElementById ('divi-input-2');
const diviButtonEl = document.getElementById ('divi-button');
const diviResultsEl = document.getElementById ('divi-result')

diviButtonEl.addEventListener('click', function() {
    const number7 = diviInputEl1.value;
    const number8 = diviInputEl2.value;
const quotient  = Number(number7) / Number(number8);
diviResultsEl.textContent = quotient;
})
