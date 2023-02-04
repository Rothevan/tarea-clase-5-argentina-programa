//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $buttonCalculateTotalTime = document.querySelector("#button-calculate-total-time")

$buttonCalculateTotalTime.onclick = calculateTotalTime

function calculateTotalTime() {
    let seconds = 0
    secondsNode = document.querySelectorAll(".seconds")
    for (let i = 0; i < secondsNode.length ; i++) {
        seconds += Number(secondsNode[i].value)
    }

    let finalseconds = seconds % 60
        
    let minutes = Math.floor(seconds/60)
    minutesNode = document.querySelectorAll(".minutes")
    for (let i = 0; i < minutesNode.length ; i++) {
        minutes += Number(minutesNode[i].value)
    }

    let finalminutes = minutes % 60
    
    let hours = Math.floor(minutes/60)
    hoursNode = document.querySelectorAll(".hours")
    for (let i = 0; i < hoursNode.length ; i++) {
        hours += Number(hoursNode[i].value)
    }
    console.log(hours)
    document.querySelector("#total-time").innerText = "Llevamos " + hours + " horas, " + finalminutes + " minutos, y " + finalseconds + " segundos de clase."
}