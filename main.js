let operacion = prompt("Ingresa la operación que deseas realizar: suma, resta, multiplicacion o division");

// Solicitar números al usuario
let x = Number(prompt("Ingresa el primer número (x):"));
let y = Number(prompt("Ingresa el segundo número (y):"));

// Declarar variable para el resultado
let resultado;

// Usar switch con break para cada operación
switch (operacion) {
    case "suma":
        resultado = x + y;
        break;
    case "resta":
        resultado = x - y;
        break;
    case "multiplicacion":
        resultado = x * y;
        break;
    case "division":
        resultado = x / y;
        break;
    default:
        resultado = "Operación no válida";
}

// Mostrar el resultado en la consola
console.log(`El resultado de la ${operacion} es: ${resultado}`);