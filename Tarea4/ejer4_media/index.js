const answer = document.querySelector(".answer");
const bottomTry = document.querySelector("#btn_try");
const inputNumber = document.querySelector("#number");
const arrayNum = [];

const calculeAverage = (array) => {
    let avg = 0;
    if(arrayNum.length === 0) return "Ningun valor introducido"
    array.forEach(number => {
        avg += number;
    });
    avg /= array.length;
    return "La media de [" + array + "] es " + avg.toFixed(1);
}

bottomTry.addEventListener("click", () => {
    let number = Math.round(inputNumber.value);
    if(!isNaN(number)){
        if(number === 0){
            answer.innerHTML = calculeAverage(arrayNum);
        }else{
            arrayNum.push(number);
            console.log(arrayNum)
        }
    }else{
        answer.innerHTML = "Introduzca un numero"
    }
    inputNumber.value = "";
    
    
});
