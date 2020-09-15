// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// input: str and a number which represents the key
// output: str with each char shifted by the key
// assume: only letters are shifted
//         case sensitive
//         if shift makes char past z, then wrap around back to a

// logic: split str into ary of chars
//        map thru chars
//          downcase to false
//          if lower case, then downcase is true
//          shift char by key (reference a lookup table)
//          lookup table: ary of chars 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//          find index of char upper (eg: D is 3),
//          if char exists in alpha
//            char at (idx + key) % 26
//            return downcase ? lower case char : char
//          else
//            return char

var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function caesarEncrypt(str, key) {
  var chars = str.split('');
  var downcase;
  var idx;

  return chars.map(function (char) {
    downcase = false;
    if (isLowerCase(char)) {
      downcase = true;
    }

    idx = ALPHABET.indexOf(char.toUpperCase());
    if (idx !== -1) {
      char = ALPHABET[(idx + key) % 26];
      return downcase ? char.toLowerCase() : char;
    } else {
      return char;
    }
  }).join('');
}

function isLowerCase(char) {
  var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return lowerAlphabet.indexOf(char) !== -1;
}

// Examples:

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"