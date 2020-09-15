// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

// input: str, keyword
// output: an encrypted str per the vigenere cipher
// assume: str can contain alphabetic and nonalpha chars
//         keyword will only contain alphabetic chars
//         keyword is case insensitive
//         output must retain same case as input
//         input str can be empty
//         returns new str, does not mutate original input

// logic: declare encrypted str which you will build
//        declare upper and lower alphas
//        declare currentShiftIdx = 0
//        split str into chars
//          for each char
//            if char is upper alpha
//              push (shift char by keyword[currentShiftIdx])
//              increment currentShiftIdx to be next char of keyword
//            else
//              push char to encrypted str
//        return encrypted

function vigenere(str, keyword) {
  var encrypted = [];
  var UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var LOWERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var currentStrIdx;
  var currentKeywordIdx = 0;
  keyword = keyword.toUpperCase();

  str.split('').forEach(function (char) {
    if (char >= 'a' && char <= 'z') {
      currentStrIdx = LOWERS.indexOf(char);
      encrypted.push(LOWERS[(currentStrIdx + UPPERS.indexOf(keyword[currentKeywordIdx])) % 26]);
      currentKeywordIdx = nextKeywordChar(keyword, currentKeywordIdx);
    } else if (char >= 'A' && char <= 'Z') {
      currentStrIdx = UPPERS.indexOf(char);
      encrypted.push(UPPERS[(currentStrIdx + UPPERS.indexOf(keyword[currentKeywordIdx])) % 26]);
      currentKeywordIdx = nextKeywordChar(keyword, currentKeywordIdx);
    } else {
      encrypted.push(char);
    }
  });

  return encrypted.join('');
}

function nextKeywordChar(keyword, currentKeywordIdx) {
  return keyword[currentKeywordIdx + 1] ? currentKeywordIdx + 1 : 0;
}

//  nextKeywordChar:...

//  input: keyword, currentShiftIdx
//  output: newShiftIdx
// logic: if keyword[currentShiftIdx + 1] exists, then newShiftIdx = current + 1
//        else newShiftIdx = 0


// tests:
// happy
console.log(vigenere('abc', 'm')); // 'mno'
console.log(vigenere('abc', 'mO')); // 'mpo'
console.log(vigenere('abC', 'mO')); // 'mpO'
console.log(vigenere('ab"C', 'mO')); // 'mp"O'

// edge
console.log(vigenere('', 'mo')); // ''
console.log(vigenere("Pineapples don't go on pizzas!", 'meat'));
// "Bmnxmtpeqw dhz'x gh ar pbldal!"