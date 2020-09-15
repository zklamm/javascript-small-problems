// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// input: odd int, at least 7
// output: display of an 8 pointed start
// assume: normal input

// notes: middle row has n stars
//        every other row has 3 stars (spaced differently)

// logic: 

function star(n) {
  var i;
  var j;
  var space1;
  var space2;

  for (i = n, j = 3; i >= 3; i -= 2, j += 2) {
    space1 = (n - i) / 2;
    space2 = (n - j) / 2;

    console.log(' '.repeat(space1) + '*' + ' '.repeat(space2) + '*' + ' '.repeat(space2) + '*');
  }

  console.log('*'.repeat(n));

  for (j = n, i = 3; j >= 3; j -= 2, i += 2) {
    space1 = (n - i) / 2;
    space2 = (n - j) / 2;

    console.log(' '.repeat(space1) + '*' + ' '.repeat(space2) + '*' + ' '.repeat(space2) + '*');
  }
}

// Examples:

star(7);
// *  *  * 0*2*2*(n - i) / 2, (n - j) / 2
//  * * *  1 1 1 (n - i) / 2, (n - j) / 2
//   ***   2 0 0 (n - i) / 2, (n - j) / 2
// ******* 7
//   ***   2 0 0 (n - 3) / 2
//  * * *  1 1 1
// *  *  * 0 2 2
star(9);
// *   *   * 0 3 3 (n - n)
//  *  *  *  1 2 2 (n - (n - 2) / 2
//   * * *   2 1 1 (n - 5) / 2
//    ***    3 0 0 (n - 3) / 2
// *********
//    ***    3 0 0
//   * * *   2 1 1
//  *  *  *  1 2 2
// *   *   * 0 3 3
