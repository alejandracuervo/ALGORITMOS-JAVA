function saludar(){
    console.log('Hola mundo')
    alert('Hello World')
}

//algoritmo que realice un suma entre dos valores ingresados por el usuario



function sumar(){
    //declarara las variables necesarias para las funciones del algoritmo
    let n1 = 0
    let n2 = 0
    let suma=0 

// solicitar y capturar los valores solicitados por los usuarios
n1 = parseInt(prompt('Por favor infgrese el primer valor a sumar'))
n2 = parseInt(prompt('Por favor ingrese el segundo valor a sumar'))
//realiza el procedimiento
suma = n1+n2
//mostrar el resultado en pantalla
    console.log('el resultado de la suma es ' + suma)
    alert('el resultado de la suma es'+ suma)
}

//algoritmo que realice una suma, resta, multiplicacion y division entre dos valores ingresados por el usuario

function opBasicas(){
    let num1 = 0 
    let num2 = 0
    let suma = 0
    let resta = 0
    let division = 0
    let multiplicacion = 0

    num1 = parseInt(prompt('por favor digite el primer valor'))
    num2 = parseInt(prompt('por favor digite el segundo valor'))

    suma = num1 + num2
    resta = num1 - num2
    division = num1 / num2
    multiplicacion = num1 * num2

    console.log('el resultado de la multiplicacion es' + multiplicacion)
    alert('el resultado de la multiplicacion es' + multiplicacion)

    console.log('el resultado de la division es' + division)
    alert('el resultado de la division es' + division)

    console.log('el rsultad¿o de la suam es' + suma)
    alert('el resultado de la suma es' + suma)

    alert('el resultado de la resta es' + resta)
}

// algorttmo que determine el cuadrado de un numero ingresa por el usuario 
function cuadradoNum(){
    let numero1 = 0
    let cuadrado = 0

    numero1 = parseInt(prompt('por favor digite un numero'))

    cuadrado = numero1*numero1 

    console.log('el resultado es ' + cuadrado)
    alert('el resultado de suma es ' + cuadrado)
}
// realizar un algorit que determine el area del triangulo base * altura siobre 2

function areaTriangulo(){
    let base = 0
    let altura = 0
    let areaT


    base = parseInt(prompt('por favor digite la base del triangulo'))
    altura = parseInt(prompt('por favor digite la altura del trinagulo'))

    areaT = base * altura / 2

    alert('el area del triangulo es ' + areaT)
    
}

// reaalizar un altoritmo que determine la medida en kilometro, metros y centimetros de un  valor dado en pulgadas

function conversion(){
    let pulg = 0
    const cm = 2.54
    const m = 39.7
    const km = 39370
    let conversion = 0

    pulg = parseInt(prompt('ingrese un valor en pulgadas'))

    conversion = pulg * cm
    alert('el resultado en cm es ' + conversion )
    conversion = pulg / m
    alert('el resultado en m es ' + conversion)
    conversion = pulg / km
    alert('el resultado en km es ' + conversion)
}

//Realizar algoritmo que pregunte al usuario a que moneda quiere convertir el peso colombiano entre el dolar, euro, yenes 
function moneda(){
    let valor = 0
    const dolar = 0.00025
    const euro = 0.00022
    const yenes = 0.037
    let conversion 
    let resultado

    valor = parseFloat(prompt('ingrese un valor en pesos colombianos'))
    conversion = prompt('ingrese si lo quieres convertir en dolares, euros o yenes')

    switch (conversion) {
        case 'dolar':
            resultado = valor * dolar
            alert('el resultado en doleres es ' + resultado)
            break;

        case 'euro' :
            resultado = valor * euro
            alert('el resultado en euros es ' + resultado)
            break

        case 'yenes' :
            resultado = valor * yenes
            alert('el resultado en yenes es ' + resultado)
            break
        default:
            alert('especifique si es dolar, euro o yenes')
            break;
    }
}
//Algoritmo que determine si un numero es par o impar
function parImpar(){
    let numero = 0

    numero = parseInt(prompt('ingrese un numero'))

    if (numero % 2 == 0) {
        alert('el numero es par')
    }

    else{
        alert('el numero es impar')
    }
}
//algoritmo que determine el mayor entre 2 numeros ingresados por el usuario
function numMayor(){
    let numero1 = 0
    let numero2 = 0

    numero1 = parseInt(prompt('ingrese un valor'))
    numero2 = parseInt(prompt('ingrese un valor'))

    if (numero1 > numero2) {
        alert('el numero mayor es ' + numero1)
    } 

    else if (numero2 > numero1){
        alert('el numero mayor es ' + numero2)
    }
}
//Algoritmo que determine el menor de 3 numeros ingresados por el usuario
function numMenor(){
    let numero1 = 0
    let numero2 = 0
    let numero3 = 0

    numero1 = parseInt(prompt('ingrese un valor'))
    numero2 = parseInt(prompt('ingrese un valor'))
    numero3 = parseInt(prompt('ingrese un valor'))

    if (numero1 < numero2 && numero1 < numero3) {
        alert('el numero menor es ' + numero1)
    }
    else if (numero2 < numero1 && numero2 < numero3) {
        alert('el numero menor es ' + numero2)
    }
    else if (numero3 < numero1 && numero3 < numero2) {
        alert('el numero menor es ' + numero3)
    }
}
//El colegio abc requiere un sistema que le permita validar a x estudiante si aprobo o reprobo x materia teniendp encuanta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1
function promedioNotas(){
    let nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9 = 0
    let suma = 0
    let division = 9
    let promedio = 0

    nota1 = parseInt(prompt('ingrese la nota1'))
    nota2 = parseInt(prompt('ingrese la nota2'))
    nota3 = parseInt(prompt('ingrese la nota3'))
    nota4 = parseInt(prompt('ingrese la nota4'))
    nota5 = parseInt(prompt('ingrese la nota5'))
    nota6 = parseInt(prompt('ingrese la nota6'))
    nota7 = parseInt(prompt('ingrese la nota7'))
    nota8 = parseInt(prompt('ingrese la nota8'))
    nota9 = parseInt(prompt('ingrese la nota9'))

    suma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9
    promedio = suma / division

    if (promedio > 6.0){
        alert('aprobo la materia ' + promedio)
    }
    else if (promedio < 6.1) {
        alert('reprobo la materia ' + promedio)
    }
}
//Un individuo desea invertir su capital en un banco y requiere saber cunato dinero ganara despues de n numero de años teniendo encuenta que el banco paga un interesa mensual del 0.7%
function capital(){
    let inversion = 0
    let años = 0
    let intereses = 0

    inversion = parseInt(prompt('ingrese el valor que invirtio'))
    años = parseInt(prompt('ingrese los años en los que ha invertido'))

    intereses = (años * 12 ) * (inversion * 0.7)

    alert('el interes es de ' +intereses)
} 
