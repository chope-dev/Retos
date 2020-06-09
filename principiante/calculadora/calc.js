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
const igual = document.getElementById('=')
const cero = document.getElementById('0')

var operador
var numeroTemporal = 1

class calculadora {
    constructor() {
        this.inicio = this.inicio.bind(this)
        this.inicio()
        this.leerTeclas()


    }

    inicio() {
        this.numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.botones = { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, mas, menos, por, dividido, punto, igual }

    }

    leerTeclas() {
        document.addEventListener('keydown', this.identificarTecla)
        this.botones.uno.addEventListener("click", this.identificarBoton)
        this.botones.dos.addEventListener("click", this.identificarBoton)
        this.botones.tres.addEventListener("click", this.identificarBoton)
        this.botones.cuatro.addEventListener("click", this.identificarBoton)
        this.botones.cinco.addEventListener("click", this.identificarBoton)
        this.botones.seis.addEventListener("click", this.identificarBoton)
        this.botones.siete.addEventListener("click", this.identificarBoton)
        this.botones.ocho.addEventListener("click", this.identificarBoton)
        this.botones.nueve.addEventListener("click", this.identificarBoton)
        this.botones.cero.addEventListener("click", this.identificarBoton)
        this.botones.mas.addEventListener("click", this.identificarBoton)
        this.botones.por.addEventListener("click", this.identificarBoton)
        this.botones.dividido.addEventListener("click", this.identificarBoton)
        this.botones.menos.addEventListener("click", this.identificarBoton)
        this.botones.punto.addEventListener("click", this.identificarBoton)
        this.botones.igual.addEventListener("click", this.identificarBoton)

    }

    identificarTecla(e) {

    }



    identificarBoton(e) {
        let boton = e.target.dataset.numero
        switch (boton) {
            case '+':
                {
                    operador = '+'
                    numeroTemporal = guardarValor()
                    borrarContenido()
                    break
                }
            case '-':
                {
                    operador = '-'
                    numeroTemporal = guardarValor()
                    borrarContenido()
                    break
                }
            case '/':
                {
                    operador = '/'
                    numeroTemporal = guardarValor()
                    borrarContenido()
                    break
                }
            case '*':
                {
                    operador = '*'
                    numeroTemporal = guardarValor()
                    borrarContenido()
                    break
                }
            case '=':
                {
                    let num2 = guardarValor()
                    borrarContenido()
                    mostrarResultado(numeroTemporal, num2, operador)
                    break
                }
            default:
                total.innerHTML = total.innerHTML + (boton)
        }


    }

}

function mostrarResultado(a, b) {
    switch (operador) {
        case '+':
            {
                total.innerHTML = a + b
                break
            }
        case '-':
            {
                total.innerHTML = a - b
                break
            }
        case '*':
            {
                total.innerHTML = a * b
                break
            }
        case '/':
            {
                total.innerHTML = a / b
                break
            }
    }
}







const guardarValor = () => parseFloat(total.innerHTML)
const borrarContenido = () => total.innerHTML = ''
var calc = new calculadora