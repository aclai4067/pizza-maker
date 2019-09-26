import utilities from '../helpers/utilities.js';

const cheeseArr = [
    {
        id: 'cheese0',
        type: 'Cheddar',
        price: 50
    }, 
    {
        id: 'cheese1',
        type: 'Feta',
        price: 75
    }, 
    {
        id: 'cheese2',
        type: 'Blue',
        price: 75
    }, 
    {
        id: 'cheese3',
        type: 'Cojita',
        price: 75
    }, 
    {
        id: 'cheese4',
        type: 'Motz',
        price: 0
    }, 
    {
        id: 'cheese5',
        type: '🐐 🧀',
        price: 75
    }
];


const getSelectedCheeses = () => {
    const selectedCheeseArr = [];
    const cheeseCheckbox = document.getElementsByClassName('cheeseItem');
    for (let n = 0; n < cheeseArr.length; n++){
        const selectedCheeseId = cheeseCheckbox[n].id;
            for(let x = 0; x < cheeseArr.length; x++){
                if(cheeseCheckbox[n].checked && selectedCheeseId === cheeseArr[x].id){
            selectedCheeseArr.push(cheeseArr[x]);
            };
        };
    };
    return selectedCheeseArr;
};

const printCheeseOptions = () => {
    let domString = `
        <h5>Cheese</h5>
        <ul class='cheeseList'>
    `
    for(let i = 0; i < cheeseArr.length; i++){
        domString += `
            <div class="custom-control custom-switch">
                <input type="checkbox" class="cheeseItem custom-control-input" id="${cheeseArr[i].id}">
                <label class="custom-control-label" for="${cheeseArr[i].id}">${cheeseArr[i].type}</label>
            </div>
        `
    }
    domString += `</ul>`;
    utilities.printToDom('cheese-counter', domString);
};



export default { printCheeseOptions, getSelectedCheeses }; 