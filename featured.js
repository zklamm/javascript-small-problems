// A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// input: int
// output: next featured num greater than input
// assume: normal input(restricted to given test cases)

// logic: if input > 999999987, return error
//        starting at input, find the next int that is a multiple of seven
//        while this num is even or contains same digit twice, find next multiple of seven
//        return current number

//         nextMultiple7: 8 % 7 = 1 => 8 + 7 - 1
//         twoDigitsSame: String(n).split('')
//            uniq?:....

function featured(n) {
  if (n > 999999987) { return 'No featured number higher than input'; }

  var current = n;

  current = nextMultiple7(current);

  while (current % 2 === 0 || !isUnique(String(current).split(''))) {
    current = nextMultiple7(current);
  }

  return current;
}

function nextMultiple7(current) {
  var remainder = current % 7;

  return current + (7 - remainder);
}

// input: ary
// output: bool
// logic: loop thru elems
//          if current elem exists in built array, return false, else add to built array and continue
//        return true

function isUnique(ary) {
  var built = [];
  var i;

  for (i = 0; i < ary.length; i += 1) {
    if (built.indexOf(ary[i]) === -1) {
      built.push(ary[i]);
    } else {
      return false;
    }
  }

  return true;
}

// Examples:

// console.log(isUnique([1, 2, 3, 3])); // false
// console.log(isUnique([1, 2, 3])); // true

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(999999999));    // 'No featured number higher than input'
