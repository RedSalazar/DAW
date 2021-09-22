const answer = document.querySelector(".answer");
const bottomTry = document.querySelector("#btn_try");

const getNumberLotery = (array) => {
    let rndNumber = 0;
    while(array.length < 6){
        rndNumber = Math.floor(Math.random() *(50) + 1);
        console.log(rndNumber)
        if(!array.find(number => number === rndNumber)){
            array.push(rndNumber)

        }
        console.log(array)

    }
    

}

bottomTry.addEventListener("click", () => {
    const arrayNum = [];
    getNumberLotery(arrayNum);
    answer.innerHTML = arrayNum;
});
