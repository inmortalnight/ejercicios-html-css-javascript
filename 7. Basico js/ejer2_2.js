let numero = parseInt(prompt("Introduzca un número: "));
if(numero>0){
    if(numero >= 10 && numero < 100){
        if(numero % 2 == 0){
            alert("Su número es par.")
        } else {
            alert("Su número es impar.")
        }
    } else if (numero >= 100){
        let resto = numero % 2
        alert(numero + " dividido entre 2 es " + resto)
    } else {
        alert("Ha ocurrido un error.")
    }
} else {
    alert("Ha ocurrido un error.")
}