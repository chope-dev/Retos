const menos = document.getElementById("-")
const mas = document.getElementById("+")
var numero = document.getElementById("number")
let valor = 0
numero.innerHTML = valor

menos.addEventListener("click", restar)
mas.addEventListener("click", sumar)


function restar() {
    numero.innerHTML--
}

function sumar() {

    numero.innerHTML++
}