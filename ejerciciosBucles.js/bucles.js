//Number(prompt("Ingrese un numero"));
//ejercicio1
/* 

let numeroIngresado =Number(prompt("Ingrese un numero"));

for (let i = 1; i <= 10; i++) {
  let resultado = numeroIngresado * i;
  console.log(resultado);
  console.log(`${numeroIngresado} x ${i} = ${resultado}`);
}
  */

//------------------------------------------------------------------
//ejercicio2
/* let numeros = []

while(numeros !== 0){
  numeros = Number(prompt( ("Ingresa un número (para terminar ingrese 0):"))); 
  
}

alert(`La lista es: ${numeros}`); */

//.Number.parseInt
//parseInt("F", 16) 


//------------------------------------------------------------------
//ejercicio5

/*  let numeroIngresado = Number(prompt("Ingrese un numero"));

for (let i = 1; i <= numeroIngresado; i++) {
  if (numeroIngresado % i === 0) {
    console.log(i);
  }
} */
 
//------------------------------------------------------------------
//ejercicio6
/* 
    const miFamilia = [ 
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
  } 
 */


  //------------------------------------------------------------------
//ejercicio7

/* 
const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < miArray.length; i++) {
  console.log(miArray[i] * 2);
}
 */
  //------------------------------------------------------------------
//ejercicio8

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
//ejercicio9

/* 
const numeros = [20, 51, 5, 85, 36, 98, 75, 63, 99, 28];

for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}
 */
    //------------------------------------------------------------------