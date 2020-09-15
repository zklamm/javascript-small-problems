// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the reuslt
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

// input: str
// output: bool
// assume: ignore all non-numeric chars
// logic: remove non-numeric chars
//        split string, reverse it to have digits
//        declare new ary to hold transformation
//        map thru digits
//          if idx is even, append elem to new ary
//          else, double elem (have to convert to number)
//            if elem > 9, subtract 9 and append to new ary
//            else, append to new ary
//        reduce new ary to sum digits
//        if reduction % 10 === 0, true, else false

function luhn(numStr) {
  var digits = numStr.replace(/\D/, '').split('').reverse();
  var reduced = digits.map(formula).reduce(function (sum, digit) {
    return sum + digit;
  });

  return reduced % 10 === 0;
}

function formula(digit, idx) {
  digit = Number(digit);
  if (idx % 2 === 0) {
    return digit;
  } else {
    digit *= 2;
    return digit > 9 ? digit - 9 : digit;
  }
}

// tests:

console.log(luhn("2323 2005 7766 3554")); // true
console.log(luhn('1')); // false
console.log(luhn('8763')); // true
console.log(luhn('1111')); // false
