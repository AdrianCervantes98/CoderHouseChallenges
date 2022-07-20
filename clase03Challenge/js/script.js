const numberN = parseInt(prompt('Ingrese un número para realizar la sumatoria de 1 al número ingresado.'));
let result = 1;
if(numberN < 1 || isNaN(numberN)) {
    alert('El número ingresado no es válido.')
} else {
    for(let i = 2; i < numberN+1; i++) {
        result += i;
    }
    alert(`La sumatoria de 1 a ${numberN} es: ${result}`);
}

