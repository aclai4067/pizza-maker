import utilities from '../helpers/utilities.js';

const cheeseArr = [
    {
        id: 'cheese0',
        type: 'cheddar',
        price: 0.50
    }, 
    {
        id: 'cheese1',
        type: 'feta',
        price: 0.75
    }, 
    {
        id: 'cheese2',
        type: 'blue',
        price: 0.75
    }, 
    {
        id: 'cheese3',
        type: 'cojita',
        price: 0.75
    }, 
    {
        id: 'cheese4',
        type: 'motz',
        price: 0.00
    }, 
    {
        id: 'cheese5',
        type: '🐐',
        price: 0.75
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
                <input type="checkbox" class="custom-control-input" id="${cheeseArr[i].id}">
                <label class="custom-control-label" for="${cheeseArr[i].id}">${cheeseArr[i].type}</label>
            </div>
        `
    }
    domString += `</ul>`;
    utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions }; 