const container = document.getElementsByClassName("container");
// for(let i=0; i<16; i++){
//     container[0].appendChild(div);
// }
for(let i=0; i<16; i++){
    const div = document.createElement("div");
    div.classList.add("grid");
    container[0].appendChild(div)
}