// input: string
// output: a stripped string
// assume: cannot use built in method
// logic: iterate through string, add chars to new string if

function trim(string) {
  var result = '';
  var firstCharIdx;
  var lastCharIdx;
  var i;

  for (i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      firstCharIdx = i;
      break;
    }
  }

  for (i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      lastCharIdx = i;
    }
  }

  for (firstCharIdx; firstCharIdx <= lastCharIdx; firstCharIdx++) {
    result += string[firstCharIdx];
  }

  console.log(result);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""