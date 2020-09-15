// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

// input: n
// output: ary of lights that are on after n passes
// assume: all lights are off initially
//         input will always be a number greater than 0

// logic: create array of bools of n length, where all elems are false
//        iterate thru this array n times (using i as pass count)
//          each time, toggle elem where bools[idx + 1] % i === 0
//        map bools to lights


function lightsOn(n) {
  var bools = [];
  bools.length = n;
  bools.fill(false);

  for (var passCount = 1; passCount <= n; passCount += 1) {
    bools.forEach(function (bool, idx) {
      var light = idx + 1;
      if (light % passCount === 0) {
        bools[idx] = !bools[idx];
      }
    })
  }

  return bools.map(function (bool, idx) {
    if (bool) {
      return idx + 1;
    }
  }).filter(function (light) { return light });
}

// tests:

console.log(lightsOn(3)); // 1o 2 3

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
