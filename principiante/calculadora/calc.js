var total = document.getElementById('contenido')
total.innerHTML = ''
const uno = document.getElementById('1')
const dos = document.getElementById('2')
const tres = document.getElementById('3')
const cuatro = document.getElementById('4')
const cinco = document.getElementById('5')
const seis = document.getElementById('6')
const siete = document.getElementById('7')
const ocho = document.getElementById('8')
const nueve = document.getElementById('9')
const mas = document.getElementById('+')
const menos = document.getElementById('-')
const por = document.getElementById('*')
const dividido = document.getElementById('/')
const punto = document.getElementById('.')
const enter = document.getElementById('enter')

uno.addEventListener('click', prueba)
dos.addEventListener('click', prueba)
mas.addEventListener('click', sumar)


function prueba() {
    total.innerHTML = total.innerHTML + '1'

}