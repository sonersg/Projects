// mouse events
// element.addEventListener(type, function);

const parentDiv = document.querySelector("#parentDiv");
const div = document.querySelector("#myDiv");

//parentDiv.style.backgroundColor = "transparent";
document.body.style.backgroundColor = "skyblue";
parentDiv.style.width = "100%";
parentDiv.style.height = "100vh";


/*
parentDiv.style.display = "flex";
parentDiv.style.flexWrap = "wrap";
parentDiv.style.alignItems = "center";
parentDiv.style.justifyContent = "center";*/


div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.alignItems = "center";
div.style.justifyContent = "center";

div.style.border = "5px solid white";
div.style.borderRadius = "90px";
div.style.position = "relative";

/*
div.addEventListener("click", e => {
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "orange";
})

div.addEventListener("contextmenu", e => {
    console.log("You opened the context menu!");
})
div.addEventListener("mousemove", e => {
    console.log("You are within the square!");
})
div.addEventListener("mouseover", e => {
    div.style.backgroundColor = "transparent";
    div.innerText = "amcık\ntayip";
    div.style.fontSize = "35px";
    div.style.color = "red";
})

console.log(div.style);
*/

div.innerText = "!";
div.style.fontSize = "90px";
div.style.color = "yellow";

div.addEventListener("dblclick", e => {
    div.style.backgroundColor = "transparent";
    div.innerText = "amcık\ntayip";
    div.style.fontSize = "35px";
    div.style.color = "red";
})
div.addEventListener("mouseleave", e => {
    div.style.backgroundColor = "grey";
    div.innerText = "!";
    div.style.fontSize = "90px";
    div.style.color = "yellow";
})

/************************** control part *****************************/

window.addEventListener("keydown", event => console.log(event.key));

const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y += 30;
            div.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 30;
            div.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 30;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 30;
            div.style.left = x + "px";
            break;
        default:
            break;
    }
}