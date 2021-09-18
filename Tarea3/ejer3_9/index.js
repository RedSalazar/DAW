const answer = document.querySelector(".answer");
const bottomTry = document.querySelector("#btn_try");
const inputNumber = document.querySelector("#number");



bottomTry.addEventListener('click', () => {

    if(!isNaN(inputNumber.value) && (inputNumber.value) > 0){
        let number = inputNumber.value;
        let factorial = 1;
        for(let i = number; i > 0; i--){
            factorial *= i;
        }
        resp = "El factorial de " + number + " es " + factorial;
    
    }else{
        resp = "Introduce un numero valido";
    }

    answer.innerHTML = resp;
})








