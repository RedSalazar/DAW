/*Queremos realizar una aplicación que nos permita comprobar hasta qué 
punto la función Math.random es realmente aleatoria
Para ello, calcularemos 10.000 veces números aleatorios del 1 al 10
Mostraremos en una página web la frecuencia con la que ha salido cada número
*/ 

//He limitado el maximo a 50 para evitar sustos y cuelgues del pc de clase :)

const answer = document.querySelector(".answer");
const bottomTry = document.querySelector("#btn_try");
const childPre = document.createElement('pre');
const childP = document.createElement('p');
let contTry = 1;


const checkEveryNumber = (array) => {
    let childP = document.createElement('p');
    childP.innerHTML += `Prueba ${contTry}`;
    answer.appendChild(childP);
    answer.appendChild(childPre);
    contTry++;

    let cont = 0;
    for (let i = 1; i < 11; i++) {
        cont = 0;
        array.forEach(element => {
            if(element === i) cont++
        });

        if(cont != undefined){
            childP = document.createElement('p');
            childP.innerHTML += `El numero ${i} se repite ${cont} veces.`;
            answer.appendChild(childP);
            answer.appendChild(childPre)
        }
        console.log(cont)
    }
}

const checkRandomMath = (array) => {
    let rndNumber = 0;
    console.log(array)
    for (let i = 0; i <= 50; i++) {
        rndNumber = Math.floor(Math.random() * (11) + 1);
        array.push(rndNumber)
    }
    console.log(array)
    checkEveryNumber(array);
}

bottomTry.addEventListener("click", () => {
    const rndArray = [];
    checkRandomMath(rndArray);
    answer.innerHTML += rndArray;
});
