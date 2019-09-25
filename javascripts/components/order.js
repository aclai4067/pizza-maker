import cheese from './cheese.js';
import meat from './meat.js';
import veggie from './veggie.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (toppings) => {
    let toppingString = `
        <h2 id='summary' class='text-center'>Your Order Summary</h2>
        <div class='row d-flex'>
            <h4 class='col-6 text-center'>Base (12" Pizza)</h4>
            <h4 class='col-6 text-center'>$5.00</h4>
        </div>
    `;
    let total = 5;
    for(let i = 0; i < toppings.length; i++){
        total += toppings[i].price;
        toppingString += `
        <div class='row d-flex'>
            <h4 class='col-6 text-center'>${toppings[i].type}</h4>
            <h4 class='col-6 text-center'>$${(toppings[i].price).toFixed(2)}</h4>
        </div>
        `
    }
    toppingString += `
        <div id='totalPrice' class='row d-flex'>
            <h3 class='col-6 text-center'>Total:</h3>
            <h3 class='col-6 text-center'>$${total.toFixed(2)}</h3>
        </div>
    `
    utilities.printToDom('final-order', toppingString)
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggie.getSelectedVeggies();
    const allToppings = selectedCheeses.concat(selectedMeats, selectedVeggies);
    createFinalOrder(allToppings);
};

const printOrderBtn = () => {
    let domString = `
        <button type="button" id='orderBtn' class="btn btn-outline-light">Create Pizza</button>
    `
    utilities.printToDom('final-order', domString);
    document.getElementById('orderBtn').addEventListener('click', createOrderEvent);
};

export default { printOrderBtn };