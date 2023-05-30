let gridSize = 16;

function makeGrid(size) {
    const grid = document.getElementById('grid-container');
    const widthAndHeight = 960 / size;
    for (let i = 0; i < size**2; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('id','pixel')
        grid.appendChild(cell)
    };
    const cellSize = document.querySelectorAll('#pixel')
        cellSize.forEach((cell) => {
            cell.style.width = `${widthAndHeight}px`;
            cell.style.height = `${widthAndHeight}px`
        });
    const pen = document.querySelectorAll('#pixel');
        pen.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'gray';
            })
        })    
}

makeGrid(gridSize);

const changeSize = document.querySelector('#change-size')
changeSize.addEventListener('click', getUserSize);

function getUserSize() {
    gridSize = prompt('What size grid would you like? Limit is 100.');
    if (gridSize < 1 || gridSize > 100) {
        alert('Please enter a number greater than 0 and less than 101.')
        getUserSize();
    }
    resetGrid();
}

function resetGrid() {
    const cells = document.querySelectorAll('#pixel')
    cells.forEach((cell) => {
        cell.remove()
    })
    makeGrid(gridSize)
}