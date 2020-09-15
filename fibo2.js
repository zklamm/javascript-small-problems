// In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// input: n, a pos int
// output: nth fibo
// assume: first 2 fibo numbers are 1 and 1
//         pos int as input
//         solution cannot be a recursive function
//         if other type of input, return undefined

// logic: return undefined if !isValid
//        initialize first and second to 1
//        loop thru each int up to n (inclusive)
//          each iteration, reassign first and second
//            first = second 1 1 2
//            second = current 1 2 3
//            current = first + current 2 3 5
//        return current

function fibonacci(n) {
  if (!isValid) { return undefined; }
  if (n < 3) { return 1; }

  var prev1 = 1;
  var prev2 = 1;
  var current;
  var i;

  for (i = 3; i <= n; i += 1) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return current;
}

function isValid(n) {
  return (n > 0 && Math.floor(n) === n);
}

// Examples:

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(100));      // 354224848179261915075