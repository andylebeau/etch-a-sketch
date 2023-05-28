const grid = document.getElementById('container');

function makeGrid() {
    for (let rows = 0; rows < 16; rows++) {
        for (let columns = 0; columns < 16; columns++) {
            const row = document.createElement('div');
            row.classList.add('pixel');
            grid.appendChild(row);
        };
    };
}

makeGrid();

const pen = document.querySelectorAll('.pixel');
    pen.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'gray';
        })
    })