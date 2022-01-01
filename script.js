let h1 = document.getElementsByTagName("h1")[0];
let p1 = document.getElementsByTagName("p")[0];
let input = document.getElementById("h1");
let input2 = document.getElementById("prg");

function ttl() {
    h1.innerHTML = input.value;
}

function paragraph() {
    p1.innerHTML = input2.value;
}

function onOver(button1) {
    button1.style.backgroundColor = button1.innerHTML;
}

function onOut(button1) {
    button1.style.backgroundColor = "rgb(239, 239, 239)";
}

function onOver2(button2) {
    button2.style.backgroundColor = "rgb(54, 54, 54)";
}


// Change text color
function changeColor(button) {
    h1.style.color = button.innerHTML;
    p1.style.color = button.innerHTML;
}
// Change text color

// Change text align
function text(button) {
    h1.style.textAlign = button.innerHTML;
    p1.style.textAlign = button.innerHTML;
}
// Change text align


// Change text font family
function changeFontPacific(button2) {
    h1.style.fontFamily = button2.innerHTML;
    p1.style.fontFamily = button2.innerHTML;
}
function changeFontPushster(button2) {
    h1.style.fontFamily = button2.innerHTML;
    p1.style.fontFamily = button2.innerHTML;
}
function changeFontArial(button2) {
    h1.style.fontFamily = button2.innerHTML;
    p1.style.fontFamily = button2.innerHTML;
}
// Change text font family


// Change font size
function changeFontSize1() {
    h1.style.fontSize = "30px";
    p1.style.fontSize = "25px";
}
function changeFontSize2() {
    h1.style.fontSize = "60px";
    p1.style.fontSize = "50px";
}
function changeFontSize3() {
    h1.style.fontSize = "90px";
    p1.style.fontSize = "75px";
}
// Change font size


// Reset all changes
function resetChanges() {
    h1.style.fontSize = "30px";
    h1.style.fontFamily = "'Times New Roman', Times, serif";
    h1.style.color = "black";
    h1.style.textAlign = "left";
    p1.style.fontSize = "25px";
    p1.style.fontFamily = "'Times New Roman', Times, serif";
    p1.style.color = "black";
    p1.style.textAlign = "left";
}
// Reset all changes