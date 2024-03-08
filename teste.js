// Questão 1

// let index = 13;
// let sum = 0;
// let x = 0;

// while (x < index) {
//   x = x + 1;
//   sum = sum + x;
// }

// console.log(sum);

// R: Irá imprimir 91

// *-----------------------------------------------------------------------------------------------------------*

// Questão 2

// let x = 22;

// function fibo(x) {
//   let fib1 = 0;
//   let fib2 = 1;
//   let fibArray = [];

//   while (fib1 <= x) {
//     fibArray.push(fib1);
//     let proximoFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = proximoFib;
//   }

//   if (fibArray.includes(x)) {
//     console.log("O número " + x + " pertence a sequência de Fibonacci");
//   } else
//     console.log("O número " + x + " não pertence a sequência de Fibonacci");

//   return fibArray;
// }

// console.log(fibo(x));

// *-----------------------------------------------------------------------------------------------------------*

// Questão 3

// A = 1, 3, 5, 7, 9; (sequência dos números ímpares)

// B = 2, 4, 8, 16, 32, 64, 128; (sequência da potência de 2)

// C = 0, 1, 4, 9, 16, 25, 36, 49; (sequência dos quadrados perfeitos)

// D = 4, 16, 36, 64, 100; (sequência dos quadrados dos números pares)

// E = 1, 1, 2, 3, 5, 8, 13; (sequência de Fibonacci)

// F = 2, 10, 12, 16, 17, 18, 19, 200; (sequência de números que começam com D)

// *-----------------------------------------------------------------------------------------------------------*

// Questão 4

// R: Ligo o primeiro interruptor, espero 10 minutos e ligo o segundo interruptor. Vou até a outra sala. A lâmpada ligada é o segundo interruptor, a lâmpada desligada e quente é o primeiro interruptor e a lâmpada desligada e fria é o terceiro interruptor.

// *-----------------------------------------------------------------------------------------------------------*

// Questão 5

// let string = "pneumoultramicroscopicossilicovulcanoconiótico";
// let reverse = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   reverse += string[i];
// }

// console.log(reverse);
