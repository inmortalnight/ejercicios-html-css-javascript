let column = parseInt(prompt("Introduce el número de columnas:"))
let fila = parseInt(prompt("Introduce el número de filas:"))

// Bucle for
let table = document.createElement("table")
for(let i = 0; i < fila; i++){
    let tr = document.createElement("tr")
    for(let j = 0; j < column; j++){
        let td = document.createElement("td")
        td.appendChild(document.createTextNode("Hola"))
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
document.body.appendChild(table)

// Bucle while
let table2 = document.createElement("table")
let i = 0
while(i < fila){
    let j = 0
    let tr = document.createElement("tr")
    while(j < column){
        let td = document.createElement("td")
        td.appendChild(document.createTextNode("Hola"))
        tr.appendChild(td)
        j++
    }
    table.appendChild(tr)
    i++
}
document.body.appendChild(table2)
// Bucle do while
let table3 = document.createElement("table")
i = 0
do{
    let j = 0
    let tr = document.createElement("tr")
    do{
        let td = document.createElement("td")
        td.appendChild(document.createTextNode("Hola"))
        tr.appendChild(td)
        j++
    }while(j < column)
    table3.appendChild(tr)
    i++
} while(i < fila)
document.body.appendChild(table3)