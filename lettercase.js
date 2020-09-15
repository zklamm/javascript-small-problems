// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// input: string of at least one char
// output: obj that has 3 props: perc of lower, upper, and neither chars
// assume: no weird input

// logic: declare obj percents, vars lowers, uppers, neither, total
//        iterate thru chars of str
//          if lowercase, add to lowers
//          if upper, add to uppers
//          else, add to neither
//        add props to percents obj

//  lowerCase: if char >= 'a' && <= 'z'

function letterPercentages(str) {
  var percents = {};
  var lowers = 0;
  var uppers = 0;
  var neither = 0;
  var len = str.length;

  str.split('').forEach(function(char) {
    if (char >= 'a' && char <= 'z') {
      lowers += 1;
    } else if (char >= 'A' && char <= 'Z') {
      uppers += 1;
    } else {
      neither += 1;
    }
  });

  percents.lowercase = (lowers / len * 100).toFixed(2);
  percents.uppercase = (uppers / len * 100).toFixed(2);
  percents.neither = (neither / len * 100).toFixed(2);

  return percents;
}

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }