const container = document.getElementsByClassName("container");
//----unused code
// for(let i=0; i<16; i++){
//     container[0].appendChild(div);
// }
let gridNumber = 4
createGrid(gridNumber);
listenchangeBG();

//-----create grid/canvas, set as function so it can be reseted
function createGrid(x) {
    //change css property
    let temp = "";
    for(let i=0; i<x; i++){
        temp += " auto"
    }
    container[0].style.gridTemplateColumns = temp;
    //create sets of divs
    for(let i=0; i<(x**2); i++){
        const divgrid = document.createElement("div");
        divgrid.classList.add("grid");
        container[0].appendChild(divgrid)
    }
}
//------eventlistener to change bg color
function listenchangeBG() {
    let canvasDiv = document.getElementsByClassName("grid");
    for(let i=0; i<canvasDiv.length; i++){
        canvasDiv[i].addEventListener("mouseover", function(mouseHover) {
            mouseHover.target.style.backgroundColor="black";
        }, false)
    }
}


//-----Select buttons
let buttonCustom = document.getElementsByClassName("custom-grid");
let buttonReset = document.getElementsByClassName("reset");
let buttonLine = document.getElementsByClassName("show-line");
let gridLine = document.getElementsByClassName("grid")

//-----Reset divs function
function eraseDiv(){   
    while(container[0].hasChildNodes()) {
        container[0].removeChild(container[0].firstChild);
    }
    createGrid(gridNumber);
    listenchangeBG();
}
//-----Custom grid
function customGrid(){
    let x = prompt("Enter Custom Grid (ex: 4 for 4x4 Grid, max 100)");
    if(!/^[0-9]/.test(x)) {
        x = gridNumber;
    }else if(x > 100) {
        x = 100;
    }
    console.log(x);
    gridNumber = x;
    eraseDiv();
}

let hidelineTemp = false;
//-----Hide grid line
function hideLine(){
    if(hidelineTemp === false) {
        for(let i=0; i<gridLine.length; i++) {
            gridLine[i].style.border = "solid 0.01px";
        }
        hidelineTemp = true;
    }else if (hidelineTemp === true) {
        for(let i=0; i<gridLine.length; i++) {
            gridLine[i].style.border = "none";
        }
        hidelineTemp = false;
    }
    
}

//event-listener for buttons
buttonReset[0].addEventListener("click", eraseDiv)

buttonCustom[0].addEventListener("click", customGrid)

buttonLine[0].addEventListener("click", hideLine)