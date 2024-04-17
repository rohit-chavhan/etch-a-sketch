const userTyped = document.getElementById('grids');
const createButton = document.querySelector('.create');
const makeButton = document.querySelector('.make');
const mainContainer = document.querySelector('.container');

let numberOfDivs;
let cellSizePercentage;

createButton.addEventListener('click', (e) => {
    userTypedValue = userTyped.value;
    numberOfDivs = userTypedValue * userTypedValue;
    cellSizePercentage = 100/userTypedValue;

    for(let i = 0; i < numberOfDivs; i++){
        mainContainer.appendChild(document.createElement('div'));
    }

    userTyped.value = null;
}) 

makeButton.addEventListener('click', (e) => {
    const childDivs = mainContainer.querySelectorAll('div');
    function addingHeightBody(){
        childDivs.forEach(function(div){
            div.style.width = `${cellSizePercentage}%`;
            div.style.height = `${cellSizePercentage}%`;
        })
    }
    addingHeightBody();
})
