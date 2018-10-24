function rot13(str) {
  var rotated = '';
  var char;
  var i;

  for (i = 0; i < str.length; i++) {
    char = str[i];
    rotated += (isLetter(char) ? rot13Char(char) : char);
  }

  return rotated;
}

function isLetter(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')
}

function rot13Char(char) {
  var ROTATION_DISTANCE = 13;
  var charCode;
  var rotatedChar;

  if ((char >= 'A' && char <= 'M') || (char >= 'a' && char <= 'm')) {
    charCode = char.charCodeAt() + ROTATION_DISTANCE;
  } else {
    charCode = char.charCodeAt() - ROTATION_DISTANCE;
  }

  return rotatedChar = String.fromCharCode(charCode);
}
