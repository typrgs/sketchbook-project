"use strict";

let gridSize = 16;
let container = document.querySelector(".container");
let sideLength = (container.offsetWidth/gridSize)-2;

function createGrid(gridSize, sideLength){
  for(let i=0; i<gridSize*gridSize; i++){
    let div = document.createElement("div");
    div.setAttribute("style", "border: solid; border-width: 1px; border-color: black; width: " + sideLength + "px; height: " + sideLength + "px;");
    div.addEventListener("mouseover", function(e){
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}

createGrid(gridSize, sideLength);


let newGridButton = document.querySelector(".new");
newGridButton.addEventListener("click", function(e){
  gridSize = prompt("Enter new grid size: ");
  if(gridSize>100){
    gridSize = 100;
  }
  sideLength = (container.offsetWidth/gridSize)-2;
  while(container.firstChild){
    container.removeChild(container.lastChild);
  }
  createGrid(gridSize, sideLength);
});

let clearGridButton = document.querySelector(".clear");
clearGridButton.addEventListener("click", function(e){
  for(let child of container.children){
    child.style.backgroundColor = "white";
  }
});