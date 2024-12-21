let etch_container = document.querySelector('.etch-container');
let user_grid_size = prompt("What grid size would you like to play with?");
let square_number = 0;


function createGrid(grid_size){
    if(checkGridEven(grid_size)){
        for(i = 0; i < grid_size; i++){
            for(j = 0; j < grid_size; j++){
                square_number += 1;
                let gridSquare = document.createElement("div");
                gridSquare.setAttribute("id",`${square_number}`);
                gridSquare.setAttribute("class","square");
                gridSquare.style.boxSizing = "border-box";
                gridSquare.style.border = "1px solid red";
                gridSquare.style.height = calculateGridSquareSize(grid_size);
                gridSquare.style.width = calculateGridSquareSize(grid_size);
                gridSquare.style.transition = "white 1s linear";
        
        
                etch_container.appendChild(gridSquare);
            }
        }

    }
}

function promptUserForGridSize(){
    user_grid_size = prompt("Please enter an even sized number.")

    createGrid(user_grid_size);
}

function checkGridEven(grid_size){
    if(grid_size % 2 == 0) return true;
    else promptUserForGridSize();
}

function calculateGridSquareSize(grid_size){
    console.log( 800 / grid_size)
    return `${800 / grid_size}px` //size of grid
}

function fadeInColor(target) {
    target.style.transition = "background-color 0.09s ease-in";
    target.style.backgroundColor = "green"; 
}

function fadeOutColor(target) {
    target.style.transition = "background-color 4s ease-out"; 
    target.style.backgroundColor = ""; 
}

createGrid(user_grid_size);

let targetSquare = document.querySelectorAll(".square");
targetSquare.forEach((square) => {
    square.addEventListener("mouseover", () => {
        fadeInColor(square); 
    });

    square.addEventListener("mouseout", () => {
        fadeOutColor(square);
    });
});
