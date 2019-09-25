import cheese from './cheese.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (toppings) => {
    let toppingString = '';
    for(let i = 0; i < toppings.length; i++){
        toppingString += `
        <h2>${toppings[i].type}</h2>
        `
    }
    utilities.printToDom('final-order', toppingString)
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedCheeses);
};

const printOrderBtn = () => {
    let domString = `
        <button type="button" id='orderBtn' class="btn btn-outline-light">Create Pizza</button>
    `
    utilities.printToDom('final-order', domString);
    document.getElementById('orderBtn').addEventListener('click', createOrderEvent);
};

export default { printOrderBtn };