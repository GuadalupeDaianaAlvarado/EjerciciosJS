/* 
let numeroUno = prompt("Ingrese el primer numero: "); 
let numeroDos = prompt("Ingrese el segundo numero: "); 


if (numeroUno > numeroDos) {
  console.log(`El numero ${numeroUno} es mayor que el numero ${numeroDos}`);
}else {
  console.log(`El numero ${numeroUno} es menor que el numero ${numeroDos}`);
} */

//-------------------------------------------------------------------------------.

/* let numeroUno = prompt("Ingrese el primer numero: "); 
let numeroDos = prompt("Ingrese el segundo numero: "); 


if (numeroUno != numeroDos) {
  console.log(`El numero ${numeroUno} distinto ${numeroDos}`);
}else {
  console.log(`El numero ${numeroUno} es igual al ${numeroDos}`);
}
 */
//----------------------------------------------------------------------------------.

/* let numeroUno = prompt("Ingrese el primer numero: "); 
let numeroDos = prompt("Ingrese el segundo numero: "); 


if (numeroUno > numeroDos) {
  console.log(`El numero ${numeroUno} es el mayor`)
}else if (numeroUno < numeroDos) {
  console.log(`El numero ${numeroDos} es el mayor`);
}else{
  console.log(`El numero ${numeroUno} y el numero ${numeroDos} son iguales`);
}
 */
//----------------------------------------------------------------------------------..

/* let numeroUno = prompt("Ingrese el primer numero: "); 
let numeroDos = prompt("Ingrese el segundo numero: ");
let numeroTres = prompt("Ingrese el tercer numero: "); 

min = console.log(Math.min(numeroTres, numeroDos, numeroTres) )
 */

//----------------------------------------------------------------------------------.

/* 
let personaUno={
  nombre:"Juan",
  edad:35,
  altura: 1.6,
}
let personaDos={
  nombre:"Carlos",
  edad:30,
  altura: 1.7,
}
if (personaUno.altura > personaDos.altura ){
  console.log(`${personaUno.nombre} es mas alto que ${personaDos.nombre} `) 
}else if(personaUno.altura < personaDos.altura ){
  console.log(`${personaDos.nombre} es mas alto que ${personaUno.nombre}  `)
}

if (personaUno.edad > personaDos.edad ){
  console.log(`${personaUno.nombre} es mayor de edad que ${personaDos.nombre} `) 
}else if(personaUno.edad < personaDos.edad ){
  console.log(`${personaDos.nombre} es mayor de edad que ${personaUno.nombre}  `)
}
 */


//----------------------------------------------------------------------------------.

/* let nombre = prompt("Ingrese su nombre "); 
let edad = prompt("Ingrese su edad ");
let altura = prompt("Ingrese su altura en cm"); 
let vision = prompt("Ingrese su vsion del 1 al 10"); 

if(edad>=18 && altura>=150 && vision>=8 ){ //Usar && para que salga true todos deven ser true
  console.log(`${nombre} SI esta abilitado para conducir.`)
}else{
  console.log(`${nombre} No esta abilitado para conducir.`)
}
 */

//----------------------------------------------------------------------------------.

/* 
let nombre = prompt("Ingresa tu nombre");
let tieneEntrada = prompt("¿Tiene entrada si o no?");

switch (nombre) {
  case "guadalupe":
    alert(`Bienvenido/a ${nombre} tiene pase libre.`);
    break;
  default:
    if (tieneEntrada === "si") {
      alert(`Bienvenido/a ${nombre} tiene pase comun`);
    } else {
      let compraEmtrada = prompt("¿Deseas comprar una entrada si o no?");
      if (compraEmtrada === "si" ) {
        dineroDisponible = prompt("Ingresa tu dinero disponible");
        if (dineroDisponible >= 1000) {
          alert(`Bienvenido/a ${nombre} compra realizada.`);
        } else {
          alert(`Dinero insuficiente, gracias por visitarnos ${nombre}.`);
        }
      } else {
        alert(`Gracias por visitarnos ${nombre}.`);
      }
    }
    break;
}
 */

//----------------------------------------------------------------------------------.

/* 
let intentos = 3;
let numeroAdivinar = 5;

adivinanza1 = prompt("Adivina el número:")

if (adivinanza1 === numeroAdivinar) {
  alert("Ganaste, has adivinado el numero incognita");
}else {  
  prompt("Te quedan 2 intentos")
}
  adivinanza2 = prompt("Adivina el número:")

if (adivinanza2 === numeroAdivinar) {
  alert("Ganaste, has adivinado el numero incognita");
} else{
  prompt("Te quedan 1 intento")}

  adivinanza3 = prompt("Adivina el número:")

  if (adivinanza3 === numeroAdivinar) {
    alert("Ganaste, has adivinado el numero incognita");
  } else{
    alert("Gracias por participar")} */

//----------------------------------------------------------------------------------.


/* let ingreseColor= prompt("Ingrese un color")

switch (ingreseColor) {
  case "blanco":
      alert("Falta de color");
  break;
  case "negro": 
      alert("Falta de color");
  break;
  case "verde": 
      alert("El color de la naturaleza");
  break;
  case "amarillo": 
      alert("El color del sol");
  break;
  case "rojo": 
      alert("El color del fuego");
  break;
  case "marron": 
      alert("El color de la tierra");
  break;  
  case "azul": 
      alert("El color del agua");
  break;
  default:
    alert("Excelente eleccion, no lo teniamos pensado.");
    break;
} */

//----------------------------------------------------------------------------------.

/* let operacion= prompt("Ingrese una operacion, suma, resta, multiplicacion, division")
let numeroUno= prompt("Ingrese su primer numero")
let numeroDos= prompt("Ingrese su segundo numero")

/* Number.parseInt */

/* switch (operacion) {
  case "suma":
    alert(`El resultado de ${numeroUno} + ${numeroDos} = ${numeroUno+numeroDos}`) 
    break;
  case "resta":
    alert(`El resultado de ${numeroUno} - ${numeroDos} = ${numeroUno-numeroDos}`) 
    break;
  case "multiplicacion":
      alert(`El resultado de ${numeroUno} * ${numeroDos} = ${numeroUno*numeroDos}`) 
      break;
  case "division":
        alert(`El resultado de ${numeroUno} / ${numeroDos} = ${numeroUno/numeroDos}`) 
        break;
  default:
    alert("Operacion no valida")
    break;
}
 */

//----------------------------------------------------------------------------------.




