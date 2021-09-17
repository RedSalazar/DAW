// # Crea una web que pida el nombre, apellidos, el salario y la edad
// ## El usuario escribe los datos correctos, no hay que validar
// ## Si el salario es mayor que 2000, no cambia
// ## Si el salario está entre 1000 y 2000:
// ### Si además la edad es mayor de 45 años, se sube un 3%
// ### Si la edad es menor de 45 o igual se sube un 10%
// ##Si el salario es menor que 1000
// ## Los menores de 30 años cobrarán exactamente 1100
// ## Si la edad es de 30 a 45 años, el salario sube un 3%
// ## A los mayores de 45 años, sube un 15%


const salaryDOM = document.querySelector("#salary");
const ageDOM = document.querySelector("#age");
const bottomDOM = document.querySelector(".btn");
const answerDOM = document.querySelector(".answer");

bottomDOM.addEventListener('click', () => {
    let salary = salaryDOM.value;
    let age = ageDOM.value;

    //No valido pero tengo en pongo valor por default
    age = isNaN(age) ? 35 : age;
    salary = isNaN(salary) ? 1500 : salary;
    let resp = salary;

    if(salary <= 2000){ // Si el salario es mayor que 2000, no cambia
        if(salary >= 1000 && salary <= 2000){ // Si el salario está entre 1000 y 2000
            if(age > 45){
                resp = resp * 1.03; // ### Si además la edad es mayor de 45 años, se sube un 3%
            }else{
                resp = resp * 1.10; // ### Si la edad es menor de 45 o igual se sube un 10%
            }
        }else if(salary < 1000){  // ##Si el salario es menor que 1000
            if(age < 30){
                resp = 1100; // ## Los menores de 30 años cobrarán exactamente 1100
            }else if(age >= 30 && age <= 45){
                resp = resp * 1.03; // ## Si la edad es de 30 a 45 años, el salario sube un 3%
            }else{
                resp = resp * 1.15; // ## A los mayores de 45 años, sube un 15%
            }
        }
    }else
        resp = salary;

    answerDOM.innerHTML = "El salario será de " + resp;
})

