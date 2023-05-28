const grid = document.getElementById('container');

function makeGrid() {
    for (let rows = 0; rows < 16; rows++) {
        for (let columns = 0; columns < 16; columns++) {
            const row = document.createElement('div');
            grid.appendChild(row);
            row.classList.add('pixel');
        };
    };
}

makeGrid();