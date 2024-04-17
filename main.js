const userTyped = document.getElementById('grids');
const createButton = document.querySelector('.create');
const makeButton = document.querySelector('.make');
const mainContainer = document.querySelector('.container');
const reloadPage = document.querySelector('.reload');

let numberOfDivs;
let cellSizePercentage;

const warningMessage = document.querySelector('.warning');

userTyped.addEventListener("input", () => {
    const value = parseInt(userTyped.value);
    if (value < 2 || value > 100){
        warningMessage.innerText = "Please enter a number between 2 and 100";
        // userTyped.setCustomValidity("Please enter a number between 2 and 100");
    }
    else {
        warningMessage.innerText = "Please enter a number between 2 and 100";
        // userTyped.setCustomValidity('');
    }   
})

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
    const gridCells = mainContainer.querySelectorAll('div');
    function addingHeightBody(){
        gridCells.forEach(function(div){
            div.style.width = `${cellSizePercentage}%`;
            div.style.height = `${cellSizePercentage}%`;
        })
    }
    addingHeightBody();

    function chagneDivBackground(div){
        div.style.backgroundColor = "black";
    }

    gridCells.forEach(function(div) {
        div.addEventListener('mouseover', () => chagneDivBackground(div));
    })
})

reloadPage.addEventListener('click', run);

function run(){
    location.reload();
}

