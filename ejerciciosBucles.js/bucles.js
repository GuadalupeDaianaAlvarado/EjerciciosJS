

/* 
let numeroIngresado = prompt("Ingrese un numero");

for (let i = 1; i <= 10; i++) {
  let resultado = numeroIngresado * i;
  console.log(resultado);
  console.log(`${numeroIngresado} x ${i} = ${resultado}`);
}
 */

//------------------------------------------------------------------


let operacion = Number(0) ;
let numeros = [ Number() ]

while(numeros !== 0){
  numeros = prompt("Ingresa un número (para terminar ingrese 0):");
}

alert(`La lista es: ${[numeros]}`);
/* 
.Number.parseInt
parseInt("F", 16) 
 */

//------------------------------------------------------------------

/* let numeroIngresado = (prompt("Ingrese un número"));

for (let i = 1; i <= numeroIngresado; i++) {
  if (numeroIngresado % i === 0) {
    console.log(i);
  }
}
 */

//------------------------------------------------------------------



/* const miFamilia = [ 
    pareja= "miguel",
    hermana= "cele",
    cuñado= "maxi",
    sobirna= "arely",
    sobrinoUno= "demmir",
    hermano= "ale",
    sobrinoDos= "luca",
    cuñada= "Estefania",
    mama= "merce",
    papa= "leo",];


for(let i=0; i<miFamilia.length; i++) {
    console.log(miFamilia[i]);
  } */

  //------------------------------------------------------------------

/* const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < miArray.length; i++) {
  console.log(miArray[i] * 2);
}

 */
  //------------------------------------------------------------------


/*   const miFamilia = [
    { nombre: "Miguel", edad: 26, altura: 1.75, fechaNacimiento: "01/01/1996" },
    { nombre: "Cele", edad: 28, altura: 1.68, fechaNacimiento: "03/05/1993" },
    { nombre: "Maxi", edad: 30, altura: 1.80, fechaNacimiento: "12/12/1990" },
    { nombre: "Arely", edad: 11, altura: 1.4, fechaNacimiento: "22/06/2012" },
    { nombre: "Demmir", edad: 7, altura: 1.1, fechaNacimiento: "05/11/2016" }
  ];
  
  for(let familiar of miFamilia) {
    console.log(`Mi nombre es ${familiar.nombre}. Tengo ${familiar.edad} años, mido ${familiar.altura} m y mi fecha de nacimiento es ${familiar.fechaNacimiento}.`);
  }
   */

    //------------------------------------------------------------------

/* 
    const numeros = [20, 51, 5, 85, 36, 98, 75, 63, 99, 28];

for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}
 */
    //------------------------------------------------------------------

/* let sumaPares = 0;
let sumaImpares = 0;

while () {
  const numero = parseInt(prompt("Ingrese un número (o cero para finalizar):"));
  
  if (numero === 0) {
    break;
  }
  
  if (numero % 2 === 0) {
    sumaPares += numero;
  } else {
    sumaImpares += numero;
  }
}

console.log(`La suma de los números pares es: ${sumaPares}`);
console.log(`La suma de los números impares es: ${sumaImpares}`);
 */