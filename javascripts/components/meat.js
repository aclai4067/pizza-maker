import utilities from '../helpers/utilities.js';

const meatArr = [
    {
        id: 'meat0',
        type: 'Pepperoni',
        price: 0.50
    }, 
    {
        id: 'meat1',
        type: 'Sausage',
        price: 0.75
    }, 
    {
        id: 'meat2',
        type: 'Grilled Chicken',
        price: 1.75
    }, 
    {
        id: 'meat3',
        type: 'Hot Chicken',
        price: 3.00
    }, 
    {
        id: 'meat4',
        type: 'Pulled Pork',
        price: 2.00
    }, 
    {
        id: 'meat5',
        type: '🐐 🍖',
        price: 2.75
    }
];

const getSelectedMeats = () => {
    const selectedMeatArr = [];
    const meatCheckbox = document.getElementsByClassName('meatItem');
    for (let n = 0; n < meatArr.length; n++){
        const selectedMeatId = meatCheckbox[n].id;
        for(let x = 0; x < meatArr.length; x++){
            if(meatCheckbox[n].checked && selectedMeatId === meatArr[x].id){
                selectedMeatArr.push(meatArr[x]);
            };
        };
    };
    return selectedMeatArr;
};

const printMeatOptions = () => {
    let domString = `
        <h5>Meat</h5>
        <ul class='meatList'>
    `
    for(let i = 0; i < meatArr.length; i++){
        domString += `
            <div class="custom-control custom-switch">
                <input type="checkbox" class="meatItem custom-control-input" id="${meatArr[i].id}">
                <label class="custom-control-label" for="${meatArr[i].id}">${meatArr[i].type}</label>
            </div>
        `
    }
    domString += `</ul>`;
    utilities.printToDom('meat-counter', domString);
};

export default { printMeatOptions, getSelectedMeats };