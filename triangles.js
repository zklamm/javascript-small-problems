// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// input: 3 sides of a triangle (numbers)
// output: type of triangle (str)
// assume: normal inputs (floats are fine)

// logic: first, check to see that the triangle is valid
//        if not, return 'invalid' (guard clause)
//        if all three sides are equal, return 'equilateral'
//        else if two sides are equal, return 'isosceles'
//        else return 'scalene'

//        isValid: two shortest sides must > than third side and
//                 all sides must be greater than 0

function triangle(s1, s2, s3) {
  if (!isValid(s1, s2, s3)) { return 'invalid'; }

  if (s1 === s2 && s2 === s3) {
    return 'equilateral';
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isValid(s1, s2, s3) {
  var sides = [s1, s2, s3].sort();

  return sides[0] + sides[1] > sides[2] && sides[0] > 0;
}

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"