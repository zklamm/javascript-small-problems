// The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2
// This simple sequence can easily be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }
// A good recursive function has three primary qualities:

// It calls itself at least once.
// It has an ending condition — e.g., if (n === 1), in the sum function above.
// The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).
// Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

// NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

// input: n, a pos int
// output: the nth fibo number
// assume: first 2 fibo numbers are 1 and 1
//         pos int as input
//         solution needs to be a recursive function
//         if other type of input, return undefined

// logic: unless input is valid (write isValid func), then return undefined
//          isValid: if typeof is number and it's greater than 0 and
//                   Math.floor === input
//        if n is < 3, return 1
//        else return fibo(n - 1) + fibo(n - 2)

function fibonacci(n) {
  if (!isValid(n)) { return undefined; }

  return n < 3 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}

function isValid(n) {
  return (n > 0 && Math.floor(n) === n);
}

// Examples:

// edge
console.log(fibonacci(0));       // undefined
console.log(fibonacci('0'));       // undefined
console.log(fibonacci(1.4));       // undefined
console.log(fibonacci(null));       // undefined

// normal
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765