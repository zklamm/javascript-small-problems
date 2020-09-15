// Write a function that takes a number of rows as the argument n and logs a square of numbers and asterisks. For example, if n is 7, log the following pattern:

// generatePattern(7);

// // console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
// You may assume that n is greater than 1 and less than 10.

// input: n
// output: pattern

// logic: if the number has two digits, you have to account for an extra star for all leading digits that

function determineLength(n) {
  var string = '';
  for (var i = 1; i <= n; i++) {
    string += String(i);
  }

  return string.length;
}

function generatePattern(n) {
  var number = '';
  for (var i = 1; i <= n;) {
    number += String(i);
    var numStars = determineLength(n) - number.length;
    console.log(number + '*'.repeat(numStars));
    i += 1;
  }
}

generatePattern(20);