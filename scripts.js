const grid = document.getElementById('container');

function makeGrid() {
    for (let i = 0; i < 16; i++) {
        grid.appendChild(document.createElement('div'));
    }
}

for (let j = 0; j < 16; j++) {
    makeGrid()
}