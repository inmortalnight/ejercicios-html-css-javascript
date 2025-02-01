let celdas;
try {
    celdas = parseInt(prompt("¿Cuántas celdas quieres que tenga tu array?"));
    if (isNaN(celdas)) {
        throw new Error("La entrada no es un número válido.");
    }
} catch (error) {
    alert(error.message);
    throw error; // Detiene la ejecución del script
}

let numeros = [];
for (let i = 0; i < celdas; i++) {
    numeros[i] = i;
}
for (let i = 0; i < numeros.length; i++) {
    document.write(numeros[i] + "<br>");
}
let i = 0;
while (i < numeros.length) {
    document.write(numeros[i] + "<br>");
    i++;
}