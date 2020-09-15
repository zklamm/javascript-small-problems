// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// input: number
// output: number rotated to the max!
// assume: no weird inputs
//          use functions from previous exercises

// logic: for num converted to str length times, (starting iterator at str.length and going down to 2)
//          rotateRightmostDigits of str

function maxRotation(num) {
  var i;

  for (i = String(num).length; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i)
  }

  return num;
}

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

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845