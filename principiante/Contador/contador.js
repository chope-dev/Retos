const menos = document.getElementById("-")
const mas = document.getElementById("+")
const mas2 = document.getElementById('+2')
const menos2 = document.getElementById('-2')
var numero = document.getElementById("number")
var numero2 = document.getElementById('number2')
let valor = 0
var total = document.getElementById('total')


numero.innerHTML = valor
numero2.innerHTML = valor
total.innerHTML = valor
menos.addEventListener("click", restar)
mas.addEventListener("click", sumar)


function restar() {
    numero.innerHTML--
        total.innerHTML = (parseInt(numero.innerHTML) + parseInt(numero2.innerHTML))
}

function sumar() {
    numero.innerHTML++
        total.innerHTML = (parseInt(numero.innerHTML) + parseInt(numero2.innerHTML))
}
menos2.addEventListener("click", restar2)
mas2.addEventListener("click", sumar2)


function restar2() {
    numero2.innerHTML--
        total.innerHTML = (parseInt(numero.innerHTML) + parseInt(numero2.innerHTML))
}

function sumar2() {
    numero2.innerHTML++
        total.innerHTML = (parseInt(numero.innerHTML) + parseInt(numero2.innerHTML))
}