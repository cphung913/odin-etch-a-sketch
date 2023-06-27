const board = document.querySelector(".board");
const row = document.createElement("div");
const tile = document.createElement("div");
const clearButton = document.querySelector("button");
let isMouseDown = false;

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value;
    createTiles(value);
})

document.body.addEventListener("click", toggleMouseDown);
clearButton.addEventListener("click", clearTiles);

row.classList.add("row");
tile.classList.add("tile");

board.addEventListener('mouseover',  changeColor);

function changeColor(e) {
    if (!isMouseDown) return;
    e.target.style.backgroundColor = "black";
}

function toggleMouseDown() {
    isMouseDown = !isMouseDown;
}

function createTiles(num) {
    board.innerHTML = "";
    const tempRow = row.cloneNode();
    
    for(let i = 0; i < num; i++) {
        const temp = tile.cloneNode();
        tempRow.append(temp);
        temp.addEventListener('mouseover',  changeColor);
    }

    for(let i = 0; i < num; i++) {
        const temp = tempRow.cloneNode(true);
        board.append(temp);
    }
    clearTiles();
    isMouseDown = true;
}

function clearTiles() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(element => {
        element.style.backgroundColor = "white";
    });
    toggleMouseDown();
}

createTiles(16);