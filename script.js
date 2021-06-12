// Important variabels on page

const cont = document.querySelector('div.container')// Create grid;
const btn = document.getElementById('button');


createGrid(5);

function createGrid(gridsize) {
    //Creates the grid based on input. 
    cont.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`
    cont.style.gridTemplateRows = `repeat(${gridsize}, 1fr)` 
    for(let i = 0; i < (gridsize * gridsize); i++) {
        let elm = document.createElement('div');
        elm.classList.add('gridbox');
        cont.appendChild(elm);
    }
}       

btn.addEventListener('click', function(){
    const value = document.getElementById('input').value;
    // removes old grid
    document.querySelectorAll('.gridbox').forEach(e => e.remove());
    //creates new grid
    createGrid(value)
})