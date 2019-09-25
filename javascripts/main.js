import cheese from './components/cheese.js';
import meat from './components/meat.js';
import order from './components/order.js';
import veggie from './components/veggie.js';


const init = () => {
    cheese.printCheeseOptions();
    meat.printMeatOptions();
    veggie.printVeggieOptions();
    order.printOrderBtn();
};

init();