// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// input: an odd int, n
// output: a log that displays a diamond made of *'s on an nxn grid (see below)
// assume: n is always odd int
//         n is always pos

// brainstorming: we need to log n rows
//        the middle row will be a string of n stars
//        the next closest rows will be one space + n - num spaces + one space
//        keep going until n - i === 1

// logic: determine numRows = Math.floor(n / 2)
//         call topHalf, middle, bottomHalf of n

//        topHalf:
//          for numRows times, stars = 1, spaces = (n - stars) / 2
//            log spaces + stars + spaces

//         middle: '*'.repeat(n)

//        bottomHalf:
//           for numRows times, stars = n - 2, spaces = (n - stars) / 2
//              log spaces + stars + spaces

function diamond(n) {
  var numRows = Math.floor(n / 2);
  var stars;
  var i;

  for (i = 0; i <= numRows; i += 1) {
    stars = 2 * i + 1;
    starRow(n, stars);
  }

  for (i = 1; i <= numRows; i += 1) {
    stars = n - (i * 2);
    starRow(n, stars);
  }
}

function starRow(n, stars) {
  spaces = (n - stars) / 2;
  row = ' '.repeat(spaces) + '*'.repeat(stars);
  console.log(row);
}


// Examples:

diamond(1);
// // logs
// *
diamond(3);
// // logs
//  *
// ***
//  *
diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *