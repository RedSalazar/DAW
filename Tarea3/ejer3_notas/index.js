const answer      = document.querySelector(".answer");
const bottomTry   = document.querySelector("#btn_try");
const inputNumber = document.querySelector("#number");

bottomTry.addEventListener("click", () => {

    let number = Math.ceil(inputNumber.value);
    console.log(inputNumber.value);
    switch (number) {
        case 10:
            answer.innerHTML = "Excelente"; //No se muy bien si excelente es mejor que sobresaliente en este formato pero me suena mejor
            break;
        case 9:
            answer.innerHTML = "Sobresaliente";
            break;
        case 8:
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
        case 3:
        case 2:
        case 1:
        case 0:
            answer.innerHTML = "Insuficiente";
            break;
        
        default:
            answer.innerHTML = "Introduce una nota del 0 al 10";
            break;
    }
});
