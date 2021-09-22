const answer = document.querySelector(".answer");
const bottomTry = document.querySelector("#btn_try");
const inputNumber = document.querySelector("#number");
const arrayNum = [];

const checkPalindromo = (word) => {
    let inver = ""
    let lowerCaseWord = word.toLowerCase();
    for (let i = lowerCaseWord.length-1; i >= 0; i--) {
        inver += lowerCaseWord[i];
    }
    let isPalindromo = (inver==lowerCaseWord) ? (answer.innerHTML = word + " es palindromo") : (answer.innerHTML = word + " no es palindromo");
    return isPalindromo;
}

bottomTry.addEventListener("click", () => {
    let word = inputNumber.value;
    checkPalindromo(word);
    inputNumber.value = "";
});
