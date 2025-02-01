let numero = parseInt(prompt("Introduzca un número: "));
if(numero!=0 && numero>0){
    if(numero%2 == 0){
        alert("Su número es par.")
    } else{
        alert("Su número es impar.")
    }
} else {
    alert("Lo siento, ha ocurrido un error.")
}