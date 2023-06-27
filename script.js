const board = document.querySelector(".board");
const row = document.createElement("div");
const tile = document.createElement("div");

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value;
    createTiles(value);
})

row.classList.add("row");
tile.classList.add("tile");

function createTiles(num) {
    board.innerHTML = "";
    const tempRow = row.cloneNode();
    
    for(let i = 0; i < num; i++) {
        const temp = tile.cloneNode();
        tempRow.append(temp);
    }

    for(let i = 0; i < num; i++) {
        const temp = tempRow.cloneNode(true);
        board.append(temp);
    }
}

createTiles(16);