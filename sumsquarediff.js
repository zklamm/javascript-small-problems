// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// input: int
// output: int
// assume: tests restricted to those given

// logic: declare ints, sum, squares
//        loop thru 1 to n, building an ary of these ints
//        get sum by reducing ints
//        get squares by mapping ints
//        return (square sum - sum of squares)

function sumSquareDifference(n) {
  var ints = [];
  var sumSquared;
  var squaresSummed;
  var i;

  for (i = 1; i <= n; i += 1) {
    ints.push(i);
  }

  sumSquared = ints.reduce(sum)**2;
  squaresSummed = ints.map(function (int) {
    return int**2;
  }).reduce(sum);

  return sumSquared - squaresSummed;
}

function sum(total, int) {
  return total + int;
}

// Examples:

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150