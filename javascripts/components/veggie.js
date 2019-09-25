import utilities from '../helpers/utilities.js';

const veggiesArr = [
    {
        id: 'veggie0',
        type: 'Black Olives',
        price: 0.25
    }, 
    {
        id: 'veggie1',
        type: 'Onion',
        price: 0.00
    }, 
    {
        id: 'veggie2',
        type: 'Sundried Tomato',
        price: 0.75
    }, 
    {
        id: 'veggie3',
        type: 'Spinach',
        price: 0.50
    }, 
    {
        id: 'veggie4',
        type: 'Banana Peppers',
        price: 0.50
    }, 
    {
        id: 'veggie5',
        type: 'Artichoke',
        price: 0.75
    }
];


const getSelectedVeggies = () => {
    const selectedVeggieArr = [];
    const veggieCheckbox = document.getElementsByClassName('veggieItem');
    for (let n = 0; n < veggiesArr.length; n++){
        const selectedVeggieId = veggieCheckbox[n].id;
            for(let x = 0; x < veggiesArr.length; x++){
                if(veggieCheckbox[n].checked && selectedVeggieId === veggiesArr[x].id){
                    selectedVeggieArr.push(veggiesArr[x]);
            };
        };
    };
    return selectedVeggieArr;
};

const printVeggieOptions = () => {
    let domString = `
        <h5>Veggies</h5>
        <ul class='veggieList'>
    `
    for(let i = 0; i < veggiesArr.length; i++){
        domString += `
            <div class="custom-control custom-switch">
                <input type="checkbox" class="veggieItem custom-control-input" id="${veggiesArr[i].id}">
                <label class="custom-control-label" for="${veggiesArr[i].id}">${veggiesArr[i].type}</label>
            </div>
        `
    }
    domString += `</ul>`;
    utilities.printToDom('veggies-counter', domString);
};



export default { printVeggieOptions, getSelectedVeggies }; 