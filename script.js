var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.querySelector("button");

init();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background;
}

function init() {
    setGradient();
    css.body
    css.textContent = body.style.background;
}

function randomGradient(){
    var randomColors = [];
    for (var i = 0; i < 6; i++) {
        randomColors[i] = random255();
    }
    return "linear-gradient(to right, rgb("+ randomColors[0] + ", " + randomColors[1] + ", " + randomColors[2] + "), " + 
    "rgb(" + randomColors[3] + ", " + randomColors[4] + ", " + randomColors[5] + "))";
}

function random255(){
    return Math.floor(Math.random() * 255 + 1);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener ("click", () => {
    body.style.background = randomGradient();
    css.textContent = body.style.background;

    // color1.value = "rgb(0, 255, 255)";
});

