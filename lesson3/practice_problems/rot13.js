function rot13(str) {
  var rotatedStr = '';
  var char;
  var i;

  for (i = 0; i < str.length; i++) {
    char = str[i];
    rotatedStr += (isLetter(char) ? rotate(char) : char);
  }

  return rotatedStr;
}

function isLetter(char) {
  if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
    return true;
  }
}

function rotate(char) {
  var ROTATION_DISTANCE = 13;
  var charCode;
  var rotatedChar;

  if ((char >= 'A' && char <= 'M') || char >= 'a' && char <= 'm') {
    charCode = char.charCodeAt() + ROTATION_DISTANCE;
  } else {
    charCode = char.charCodeAt() - ROTATION_DISTANCE;
  }

  return rotatedChar = String.fromCharCode(charCode);
}
