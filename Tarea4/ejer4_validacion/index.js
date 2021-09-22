/*
Queremos realizar una aplicación web que pida al usuario un nombre y una contraseña. Pediremos ambos datos con cuadros de entrada de texto (aunque no sea el mejor método).
Suponemos que el usuario está introduciendo esta información para darse de alta en algún servicio. La contraseña será visible ( no es ideal, lógicamente, pero estamos aún empezando a trabajar en JS) por lo que no pediremos repetirla.
El nombre de usuario solo puede estar formado por letras minúsculas y números, de otro modo, indicaremos el error y pediremos de nuevo el nombre.
Lo que validaremos de la contraseña es que al menos tenga un elemento de los siguientes:
Una letra mayúscula
Una letra minúscula
Un número
Un carácter que no sea ni letra ni número
Aunque sería fácil de resolver esta práctica con expresiones regulares, lo haremos sin ellas como oportunidad para practicar con strings.
Si la contraseña no cumple lo indicado en el punto anterior, pediremos al usuario que la indique de nuevo. Cuando lo cumpla, indicaremos con un mensaje que se ha almacenado correctamente la información
Ante cualquier cancelación en los cuadros, la aplicación termina. Lo indicaremos con un mensaje.
*/

const name = document.querySelector('#name');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password_repeat');

