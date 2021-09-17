// Crea una página que le pida al usuario un número
// Debes mostrar si es un número o no

// Supongo que al ser inicio del curso buscas que se pida con un prompt y no mediante inputs
const p = document.querySelector(".answer");
let respUser = prompt("Introduce un numero");

let resp = (isNaN(respUser)) ? "Eso no es un numero" : "Efectivamente es un numero";

p.innerHTML = resp;