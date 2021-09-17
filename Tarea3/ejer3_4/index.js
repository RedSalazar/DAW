// #Crea un fondo aleatorio cada vez que entramos en la pagina

const body = document.querySelector("body");
let rnd = Math.floor(Math.random() * 8);

const arrayColors = [
    "blue",
    "brown",
    "black",
    "white",
    "yellow",
    "green",
    "purple"
];

body.style.backgroundColor = arrayColors[rnd];