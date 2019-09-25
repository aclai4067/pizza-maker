import utilities from '../helpers/utilities.js';

const cheeseArr = [
    {
        type: 'cheddar',
        price: 
    }, 
    {
        type: 'feta',
        price: 
    }, 
    {
        type: 'blue',
        price: 
    }, 
    {
        type: 'cojita',
        price: 
    }, 
    {
        type: 'motz',
        price: 
    }, 
    {
        type: '🐐',
        price: 
    }
];

const printCheeseOptions = () => {
    let domString = `
        <h5>Cheese</h5>
        <ul class='cheeseList'>
    `
    for(let i = 0; i < cheeseArr.length; i++){
        domString += `
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch${i+1}">
                <label class="custom-control-label" for="customSwitch${i+1}">${cheeseArr[i].type}</label>
            </div>
        `
    }
    domString += `</ul>`;
    utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions }; 