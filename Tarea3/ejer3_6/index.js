// # Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación:
// ## La página calculará un número del 1 al 100
// ## Luego preguntará al usuario por el número para saber si ha acertado
// ## Si el usuario escribe algo que no es un número, se indicará un error y se vuelve a pedir el número
// ## Si el número escrito por el usuario es correcto, se indica que se acertó y finalizamos juego
// ## Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es
// ## Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego
// ## Al final, si se ha finalizado correctamente el juego indica el número de intentos
// ## Se permite volver a jugar al usuario mediante un cuadro de confirmación

const answer = document.querySelector(".answer");
const bottomPlay = document.querySelector("#btn_guess");
const bottomMore = document.querySelector("#btn_more");
const bottomLess = document.querySelector("#btn_less");
const bottomYes = document.querySelector("#btn_yes");
const bottomCancel = document.querySelector("#btn_cancel");
const intents = document.querySelector(".intent");

let rndNumber = 0;
let cont = 0;
let minNumber = 1;
let maxNumber = 100;

bottomYes.disabled = true;
bottomMore.disabled = true;
bottomLess.disabled = true;
bottomCancel.disabled = true;

bottomCancel.addEventListener('click', () => {
    answer.innerHTML = "Juego Cancelado";
    bottomYes.disabled = true;
    bottomMore.disabled = true;
    bottomLess.disabled = true;
    bottomPlay.disabled = false;
    bottomPlay.innerHTML =" Jugar de nuevo";
    bottomCancel.disabled = true;

})


bottomPlay.addEventListener('click', () => {
    rndNumber = Math.floor(Math.random() * (100) + 1);
    answer.innerHTML = "¿Tu numero es el " + rndNumber + "?";

    bottomYes.disabled = false;
    bottomMore.disabled = false;
    bottomLess.disabled = false;
    bottomPlay.disabled = true;
    bottomCancel.disabled = false;
})

bottomMore.addEventListener('click', () => {
    minNumber = rndNumber;
    rndNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    cont++;
    answer.innerHTML = "¿Tu numero es el " + rndNumber + "?";
})

bottomLess.addEventListener('click', () => {
    maxNumber = rndNumber; 
    rndNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    cont++;
    answer.innerHTML = "¿Tu numero es el " + rndNumber + "?";
})

bottomYes.addEventListener('click', () => { 
    answer.innerHTML = "Tu numero es el " + rndNumber + " y he tardado solo " + cont + " intentos";
    bottomYes.disabled = true;
    bottomMore.disabled = true;
    bottomLess.disabled = true;
    bottomPlay.disabled = false;
    bottomCancel.disabled = true;

    bottomPlay.innerHTML = "Jugar de nuevo";
})


// Pensaba que tenia la maquina que adivinar y no el usario pero leyendolo bien creo que es al reves :) pero como lo he hecho con la otra intención
// asi que dejo los dos codigos

// const answer = document.querySelector(".answer");
// const bottomPlay = document.querySelector("#btn_guess");
// const bottomCancel = document.querySelector("#btn_cancel");
// const bottomTry = document.querySelector("#btn_try");
// const inputNumber = document.querySelector("#number");
// let rndNumber = Math.floor(Math.random() * (10) + 1);
// console.log(rndNumber)
// let resp = "";
// bottomPlay.disabled = true;

// bottomCancel.addEventListener('click', () => {
//     answer.innerHTML = "Juego Cancelado";
//     bottomPlay.disabled = false;
//     bottomPlay.innerHTML =" Jugar de nuevo";
//     bottomCancel.disabled = true;
//     bottomTry.disabled = true;
// })


// bottomPlay.addEventListener('click', () => {
//     bottomTry.disabled = false;
//     bottomPlay.disabled = true;
//     bottomCancel.disabled = false;
//     rndNumber = Math.floor(Math.random() * (10) + 1);
// })

// bottomTry.addEventListener('click', () => {

//     if(!isNaN(inputNumber.value)){
//         let number = inputNumber.value;

//         if(number == rndNumber){
//             resp = "Ese es mi numero";
//             bottomTry.disabled = true;
//             bottomPlay.disabled = false;
//             bottomCancel.disabled = true;
//         }else{
//             resp = (number > rndNumber) ? "Mi numero es menor" : "Mi numero es mayor"
//         }
        
        
//     }else{
//         resp = "Introduce un numero valido";
//     }

//     answer.innerHTML = resp;
// })








