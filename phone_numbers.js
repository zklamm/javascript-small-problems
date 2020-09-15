// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// input: user-entered phone numbers
//          digits, spaces, dash, dot, parens (ignore all except digits)

// output: a cleaned up ten digit number as a string (10 zeros if bad)

// assume: input is str
//          good numbers: 10 digits, or 11 digits where first is 1

// logic: remove non-digit chars from the str input
//        determine whether str is good or bad
//          if str.size === 11 && str[0] === '1'
//            return str to remove first digit
//          if else str.size === 10
//            return str
//          else
//            return '0000000000'

function parseNumber(numStr) {
  var clean = numStr.replace(/\D/, '');

  if (clean.length === 11 && numStr[0] === '1') {
    clean = clean.slice(1);
  }

  return clean.length === 10 ? clean : '0'.repeat(10);
}

// tests

// happy path
console.log(parseNumber('1231231234')); // '1231231234'
console.log(parseNumber('11231231234')); // '1231231234'

// edges
console.log(parseNumber('21231231234')); // '0000000000'
console.log(parseNumber('123')); // '0000000000'
console.log(parseNumber('0')); // '0000000000'
console.log(parseNumber('')); // '0000000000'
console.log(parseNumber('1232141231221')); // '0000000000'
// console.log(parseNumber()); // 
// console.log(parseNumber()); // 
