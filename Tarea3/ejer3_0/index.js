let number1 = 16;
let number2 = 9;
let number3 = 12;

// No hago comprobacion de errores
const calculateGreaterNumber = (a,b,c) => {
    let resp = 0;
    if(a >= b && a >= c){
        resp = a;

    }else if(b > a && b >= c){
        resp = b;

    }else{
        resp = c;
    }
    return resp;
}

console.log(calculateGreaterNumber(number1, number2, number3));