const container = document.getElementsByClassName("container");
// for(let i=0; i<16; i++){
//     container[0].appendChild(div);
// }
for(let i=0; i<16; i++){
    const divgrid = document.createElement("div");
    divgrid.classList.add("grid");
    container[0].appendChild(divgrid)
}
let div = document.getElementsByClassName("grid");
for(let i=0; i<div.length; i++){
    div[i].addEventListener("mouseover", function(mouseHover) {
        mouseHover.target.style.backgroundColor="black";
    }, false)
}