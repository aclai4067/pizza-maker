import cheese from './components/cheese.js';
import meat from './components/meat.js';
import order from './components/order.js';

const init = () => {
    cheese.printCheeseOptions();
    meat.printMeatOptions();
    order.printOrderBtn();
};

init();