// const wird für die Elemente der Seite verwendet die sich selber nicht verändern werden
// wir nutzen let um eine sich verändernde Variable zu deklarieren, in der immer die aktuell ausgewählte Farbe gespreichert wird

let currentColor = "weiss";
let colorHistory = [];

function changeColor(color, logging = true) {
    console.log("changeColor", color, logging);
    const preview = document.querySelector("#preview");
    preview.style.backgroundColor = color;
    currentColor = color;

    if (logging) {
        const history = document.querySelector("#history");
        const listItem = document.createElement("li");
        listItem.textContent = color;
        history.appendChild(listItem);

        colorHistory.push(color);
    }

    console.log("history length: " + colorHistory.length);
}

function reset() {
    console.log("reset");
    const preview = document.querySelector("#preview");
    preview.style.backgroundColor = "white";
    currentColor = "weiss";

    const history = document.querySelector("#history");
    history.innerHTML = "";

    colorHistory = [];

    changeColor("weiss");
}

function undo() {
    console.log("undo");
    const history = document.querySelector("#history");
    const lastItem = history.lastElementChild;
    if (lastItem) {
        history.removeChild(lastItem);
        colorHistory.pop();
        if (history.childElementCount > 1) {
            currentColor = history.lastElementChild.textContent;
            changeColor(currentColor, logging=false);
        } else {
            reset();
        }
    }
}

const unusedFunction = (a, b) => { return a + b; };
const printHistory = () => {
    console.log("printHistory");
    for (let i = 0; i < colorHistory.length; i++) {
        console.log(colorHistory[i]);
    }
}
