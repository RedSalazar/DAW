/*
Queremos realizar una aplicación web que pida al usuario un nombre y una contraseña. 
Pediremos ambos datos con cuadros de entrada de texto (aunque no sea el mejor método).
Suponemos que el usuario está introduciendo esta información para darse de alta en algún servicio.
La contraseña será visible ( no es ideal, lógicamente, pero estamos aún empezando a trabajar en JS) por lo que no pediremos repetirla.
El nombre de usuario solo puede estar formado por letras minúsculas y números, de otro modo, indicaremos el error y pediremos de nuevo el nombre.
Lo que validaremos de la contraseña es que al menos tenga un elemento de los siguientes:
Una letra mayúscula
Una letra minúscula
Un número
Un carácter que no sea ni letra ni número
Aunque sería fácil de resolver esta práctica con expresiones regulares, lo haremos sin ellas como oportunidad para practicar con strings.
Si la contraseña no cumple lo indicado en el punto anterior, pediremos al usuario que la indique de nuevo.
 Cuando lo cumpla, indicaremos con un mensaje que se ha almacenado correctamente la información
Ante cualquier cancelación en los cuadros, la aplicación termina. Lo indicaremos con un mensaje.
*/

const nameDOM = document.querySelector('#name');
const passwordDOM = document.querySelector('#password');
const passwordRepeatDOM = document.querySelector('#password_repeat');
const button = document.querySelector('.btn');
const answerDOM = document.querySelector('.answer');

const correctName = () => {
    const name = nameDOM.value;
    console.log(name.charCodeAt(0));
    let correct = true;
    if(name.length === 0){
        return false;
    }

    for (let i = 0; i < name.length; i++) {
        if(!(name.charCodeAt(i) > 47 && name.charCodeAt(i) < 58 || name.charCodeAt(i) > 96 && name.charCodeAt(i) < 123)) correct = false;
    }
    return correct;
}

const correctPassword = () => {
    const password = passwordDOM.value;
    const passwordRepeat = passwordRepeatDOM.value;
    let isUpperCase = false;
    let isDownCase = false;
    let isRare = false;
    let isNumber = false;
    let correct = false;

    for (let i = 0; i < password.length; i++) {

        if(password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) isNumber = true;
        
        if(password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123) isDownCase = true;
            
        if(password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) isUpperCase = true;
            
        if(password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91 || password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) isRare = true;
        
    }
    if(isDownCase && isUpperCase && isRare && isNumber) correct = true;

    if(password === passwordRepeat) console.log("verdad")    

    return correct;
}

button.addEventListener('click', () => {
    answerDOM.innerHTML = "";
    const isCorrectName = correctName();
    const answerName = isCorrectName ? answerDOM.innerHTML += 'Nombre correcto.\n' : answerDOM.innerHTML += 'Solo se admiten minusculas y numeros.\n';

    const isPasswordName = correctPassword();
    const answerPassword = isPasswordName ? answerDOM.innerHTML += 'Password correcto\n' : answerDOM.innerHTML += 'La contraseña debe contener mayusculas, minusculas, numeros y algun caracter extraño\n';

    nameDOM.value = "";
    passwordDOM.value = "";
    passwordRepeatDOM.value = "";

})

