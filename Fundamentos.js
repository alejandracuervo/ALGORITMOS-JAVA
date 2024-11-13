//variables y tipos de datos
let nombres = 'Alejandra Cuervo';
let edad = 27;
let mayoredad = true;
let estatura;

console.log(typeof nombres);
console.log(typeof edad);
console.log(typeof mayoredad);
console.log(typeof estatura);

//tipos de datos complejos
let frutas = ['pera','melon','manzana','mango','durazno'];
let auto ={
    placa: 'TML92C',
    marca: 'Chevrolet',
    modulo: 2024,
    tipo: 'camioneta',
    unicoDueño: true,
    kilometraje: 52200,
}

//concateneamos variable
console.log('Bienvenido usuario' + nombres + 'Su edad es' + edad + 'Su fruta favorita es' + frutas[1])

// Estructuras de contol condicional

let edad2 = 18;
let genero = 'femenino'
if(edad2>17 && edad2<26)
    if ( genero == 'femenino') {
    console.log('Pal camion mi sol');}
    else{
        console.log('No eres apta');
    }
else{
    console.log('se salvo de la calviada');
}

let tipoSuscripcion ='Gold';
switch (tipoSuscripcion) {
    case 'Bronze':
        console.log('No le alcanzo  para mas, pobre')
        
        break;
    case 'Slover':
        console.log('Bien, pero pueder mejorar')

        break;

    case 'Gold':
        console.log('Este es el mejor pla o paquete')

        break;

    default:
        console.log8('No esxiste este tipo de siscripcion')
        break;
}

//ESTRUCTURA DE CONTROL DE BUCLES

let contador = 0;
while (contador<11) {
    console.log('Es el contador es el numero' + contador);
    contador= contador + 1;
}

for (let i= 100; i>0; i = i -10) {
    console.log('El contador con for es' + i)
}