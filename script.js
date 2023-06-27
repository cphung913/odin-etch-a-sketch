const board = document.querySelector(".board");
const row = document.createElement("div");
const tile = document.createElement("div");

let set = 16;

row.classList.add("row");
tile.classList.add("tile");

function createTiles(num) {
    for(let i = 0; i < num; i++) {
        const temp = tile.cloneNode();
        row.append(temp);
    }

    for(let i = 0; i < num; i++) {
        const temp = row.cloneNode(true);
        board.append(temp);
    }
}

createTiles(set);