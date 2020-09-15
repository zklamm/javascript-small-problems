// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// input: word str
// output: bool
// assume: letters are case insensitive
//         str will be a word of at least one char
// logic: store blocks in an object
//        upcase the str, split into chars, iterate thru chars (using for loop)
//        if char is a key or value of blocks that hasn't been used
//        (if BLOCKS[char] or char is not present in ary)
//          add block to the used pile (ary of letters)
//           (block is a key and value pair of blocks object)
//        else
//          return false
//        if we make it past loop, return true

var BLOCKS = {
  B: 'O', O: 'B',
  X: 'K', K: 'X',
  D: 'Q', Q: 'D',
  C: 'P', P: 'C',
  N: 'A', A: 'N',
  G: 'T', T: 'G',
  R: 'E', E: 'R',
  F: 'S', S: 'F',
  J: 'W', W: 'J',
  H: 'U', U: 'H',
  V: 'I', I: 'V',
  L: 'Y', Y: 'L',
  Z: 'M', M: 'Z',
}

function isBlockWord(word) {
  var letters = word.toUpperCase().split('');
  var used = [];
  var i;

  for (i = 0; i < letters.length; i += 1) {
    var char = letters[i];
    if (isBlockUsed(char, used)) {
      return false;
    } else {
      used.push(char, BLOCKS[char]);
    }
  }

  return true;
}

function isBlockUsed(char, used) {
  return used.indexOf(char) !== -1 || used.indexOf(BLOCKS[char]) !== -1
}

// tests
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('bottle'));       // false
console.log(isBlockWord('A'));       // true
console.log(isBlockWord('a'));       // true
