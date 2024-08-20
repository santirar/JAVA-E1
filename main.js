

// PUNTO 1 

// function parOImpar (numero1 , numero2) {
//     if ((numero1 % 2 == 0)) {
//       console.log("el numero es par") 
//     } 
//     else {
//       console.log("el numero es impar")
//     }
//     if ((numero2 % 2 == 0)) {
//       console.log("el numero es par") 
//     }
//     else {
//       console.log("el numero es impar")
//     }
// }

// parOImpar (2 , 7)


// PUNTO 2

// function mayorOIgual (numero1 , numero2) {
//   if (numero1 > numero2) {
//     console.log("el numero1 es mayor")
//   }
//   else if (numero2 > numero1) {
//     console.log ("el numero2 es mayor")
//   }
//   else {
//     console.log("los numeros son iguales")
//   }
// }

// mayorOIgual (5 , 6)


// PUNTO 3

// function multiploDeCinco (numero1 , numero2) {
//   if ((numero1 % 5 == 0)) {
//     console.log("el numero1 es multiplo de 5")
//   }
//   else {
//     console.log("el numero1 no es multiplo de 5")
//   }
//   if ((numero2 % 5 == 0)) {
//     console.log("el numero2 no es multiplo de 5")
//   }
//   else {
//     console.log("el numero2 no es multiplo de 5")
//   }
// }

// multiploDeCinco (10 , 7)


// PUNTO 4 

// function todosLosMenoresA (numero) {
//   for(let i = 0; i <= numero; i++) {
//     if (i === numero + 1) break;
//       console.log(i)
//   }
// }

// todosLosMenoresA (10)


// PUNTO 5

// function palabraRepetida (nombre,numero){
  
//   let resultado = '';
  
//   for(let i = 0; i < numero; i++) {
    
//     resultado += nombre;

//   }

//   console.log(resultado)
// }

// palabraRepetida ("consome" , 3)


// PUNTO 6

// function arrayValores (valores){

//   for (let i = 0; i < valores.length; i++){

//     console.log(valores[i])
//   }
// }

// const valores = ["1","2","3","4"]
// arrayValores (valores)


// PUNTO 7 

// function miArray (valores){

//   for (let i = 0; i < valores.length; i++){
    
//     if (valores[i] ==  5){
//       continue;
//     }
//     console.log(valores[i])
//   } 

// }

// const valores = ["1","2","3","4","5","6","7","8","9","10"]
// miArray (valores)


// PUNTO 8

// function arrayMultiplicado (valores,multiplo){

//   let resultado = [];

//   for (let i = 0; i < valores.length; i++){

//     resultado.push(valores[i] * multiplo);
  
//   }
//     return resultado
// }

// const valores = ["3","5"]
// let multiplo = 2;
// let resultado = arrayMultiplicado (valores,multiplo);
// console.log(resultado)