//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function makeEverything(){
let numbersArray = []

let fullList = document.querySelectorAll("input")

for (let i = 0; i < fullList.length; i++) {
numbersArray.push(fullList[i].value)

}
function calculateAverage() {
    toAverage = 0
    for (let i = 0; i<numbersArray.length; i++){
        toAverage += Number(numbersArray[i])
    }
    averageResult = toAverage/numbersArray.length
    document.querySelector("#result-average").innerText = "El promedio es " + averageResult
}

function calculateSmallest() {
    smallestnumber = Infinity
    for (let i = 0; i<numbersArray.length; i++){
        if (smallestnumber > Number(numbersArray[i])) {
            smallestnumber = Number(numbersArray[i])
        }
    }
    document.querySelector("#result-smallest").innerText = "El más pequeño es " + smallestnumber
}

function calculateBiggest() {
    biggestnumber = -Infinity
    for (let i = 0; i<numbersArray.length; i++){
        if (biggestnumber < Number(numbersArray[i])) {
            biggestnumber = Number(numbersArray[i])
        }
    }
    document.querySelector("#result-biggest").innerText = "El más grande es " + biggestnumber
}

function calculateMostRepeated(){
    let mostRepeated = 0
    let timesRepeated = 0
    for (let i = 0; i<numbersArray.length; i++){
        repetitions = 0
        for (let j = 0; j<numbersArray.length; j++){
            if (numbersArray[i] == numbersArray[j]) {
                repetitions = repetitions + 1
                }
        }
        if (repetitions > timesRepeated) {
            mostRepeated = numbersArray[i]
            timesRepeated = repetitions
        }
    }
    document.querySelector("#result-most-repeated").innerText = "El más repetido es " + mostRepeated + ", que se repite " + timesRepeated + " veces."

}
calculateAverage()
calculateBiggest()
calculateSmallest()
calculateMostRepeated()
}
