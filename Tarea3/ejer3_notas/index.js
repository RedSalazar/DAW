const answer = document.querySelector(".answer");
const bottomTry = document.querySelector("#btn_try");
const inputNumber = document.querySelector("#number");

bottomTry.addEventListener("click", () => {

    let number = Math.round(inputNumber.value);
    console.log(inputNumber.value);
    switch (number) {
        case 10:
            answer.innerHTML = "Excelente"; //No se muy bien si excelente es mejor que sobresaliente en este formato pero me suena mejor
            break;
        case 9:
            answer.innerHTML = "Sobresaliente";
            break;
        case 8:
            answer.innerHTML = "Notable";
            break;
        case 7:
            answer.innerHTML = "Notable";
            break;
        case 6:
            answer.innerHTML = "Bien";
            break;
        case 5:
            answer.innerHTML = "Suficiente";
            break;
        case 4:
            answer.innerHTML = "Insuficiente"; 
            break;
        case 3:
            answer.innerHTML = "Insuficiente";
            break;
        case 2:
            answer.innerHTML = "Insuficiente";
            break;
        case 1:
            answer.innerHTML = "Insuficiente";
            break;
        case 0:
            answer.innerHTML = "Insuficiente";
            break;
        
        default:
            answer.innerHTML = "Introduce una nota del 0 al 10";
            break;
    }
});
