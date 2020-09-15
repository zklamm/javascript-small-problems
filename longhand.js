// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// input: str of comma separated ranges (a range can be a single num)
// output: ary of all numbers represented by the input
// assume: '-', ':'. '..' are valid range separators
//         range limits are always inclusive
//         when increase is necessary, only go to next highest available
//          e.g.: 1, 3, 2 --> [1, 3, 12], not [1, 3, 22]
//         only input will be strings that contain valid syntax

// logic: declare result ary
//        split str into ranges
//        determine the first and last number of each range
//        split each range on any of non-digit groups (/\D+/)
//        (at this point we'll have an ary of subarrays)
//        for each range, add all numbers in that range
//        function numbersInRange(range)
//        return result


// '545, 64:11' --> ['545', '64:11'] --> [['545'], ['64', '11']]
// "1-3, 1-2" --> ['1-3', '1-2'] --> [['1', '3'], ['1', '2']]
// '1:5:2' --> ['1:5:2'] --> [['1', '5', '2']]

// tests:
console.log(longHand("1, 3, 7, 2, 4, 1")) // --> 1, 3, 7, 12, 14, 21
console.log(longHand("1-3, 1-2")) // --> 1, 2, 3, 11, 12
console.log(longHand("1:5:2")) // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(longHand("104-2")) // --> 104, 105, ... 112
console.log(longHand("104-02")) // --> 104, 105, ... 202
console.log(longHand("545, 64:11")) // --> 545, 564, 565, .. 611
