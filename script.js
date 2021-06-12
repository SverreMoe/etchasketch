// Important variabels on page

const cont = document.querySelector('div.container') // Create grid;
const btn = document.getElementById('button');


// initaiaze starting grid


function checkInput(input) {
    if (input > 50) {
        alert('No numbers over 100.')
        createGrid(5)
        return false;
    } else {
        return true;
    }
}


function createGrid(gridsize) {
    if (checkInput(gridsize)) { // Creates the grid based on input.
        cont.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`
        cont.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`
        for (let i = 0; i < (gridsize * gridsize); i++) {
            let elm = document.createElement('div');
            elm.classList.add('gridbox');
            cont.appendChild(elm);
        }
    }else{
        console.log('nope');
    }

}


// Get random RGB color:

function RandomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}


// Selecting all the gridboxes that is beeing generated. Inserting eventlistener
function selectGrid() {
    let boxes = document.querySelectorAll('.gridbox')
    boxes.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            e.style.backgroundColor = RandomRGB();
        })
    })
}

// change the grid based onvalue
btn.addEventListener('click', function () {
    const value = document.getElementById('input').value;
    document.querySelectorAll('.gridbox').forEach(e => e.remove());
    createGrid(value)
    selectGrid();
});


// initial grid.
createGrid(5);
selectGrid();
