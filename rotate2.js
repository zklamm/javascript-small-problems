// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// input: number, n digits (number)
// output: rotated number
// assume: no non-number input
//         ints greater than 0
//         n will not be greater than number of digits

// logic: convert num to str, split into array of chars
//        take slice of ary starting at (ary.length - n)
//        rotate this slice
//        take slice from beginning of ary to (ary.length - n) this will exclude n
//        concat rotated slice to nontouched slice and join, then convert to number and return

function rotateRightmostDigits(num, n) {
  var digits = String(num).split('');
  var separator = digits.length - n;
  var rotated = rotateArray(digits.slice(separator));

  return Number(digits.slice(0, separator).concat(rotated).join(''))
}


function rotateArray(ary) {
  return Array.isArray(ary) ? ary.slice(1).concat(ary[0]) : undefined;
}

// Examples:

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(1234, 1));        // 1234
console.log(rotateRightmostDigits(1234, 2));        // 1243
console.log(rotateRightmostDigits(1234, 3));        // 1342
console.log(rotateRightmostDigits(1234, 4));        // 2341