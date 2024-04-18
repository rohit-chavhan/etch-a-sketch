const userTyped = document.getElementById('grids');
const createButton = document.querySelector('.create');
const mainContainer = document.querySelector('.container');

let numberOfDivs;
let cellSizePercentage;

const warningMessage = document.querySelector('.warning');

userTyped.addEventListener("input", () => {
    const value = parseInt(userTyped.value);
    if (value < 2 || value > 100){
        warningMessage.innerText = "Please enter a number between 2 and 100";
    }
    else {
        warningMessage.innerText = " ";
    }
});

function magicDivs(userTypedValue){
    numberOfDivs = userTypedValue * userTypedValue;
    cellSizePercentage = 100/userTypedValue;

    for(let i = 0; i < numberOfDivs; i++){
        mainContainer.appendChild(document.createElement('div'));
    }

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
}

createButton.addEventListener('click', (e) => {
    magicDivs(parseInt(userTyped.value));
    userTyped.value = null;
});

const makeNewGrid = document.querySelector('.new-grid');

makeNewGrid.addEventListener('click', () => {
    let newValue = prompt("What should be the new value for the grid?");

    const gridCells = mainContainer.querySelectorAll('div');
    gridCells.forEach(div => div.remove());

    magicDivs(parseInt(newValue));
});

