// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.


// input: ary, or not ary, or empty ary
// output: new ary rotated once, or undefined, or empty ary (respective to input)
// assume:
//   If the input is not an array, return undefined.
//   If the input is an empty array, return an empty array.
//   Review the test cases below, then implement the solution accordingly.
//   do not mutate input

// logic: declare rotated ary = []
//        if !isArray, return undefined
//        if ary.length === 0, return []
//        push slice of ary from 1 to end, and slice(0,1) to rotated ary
//        return rotated

function rotateArray(ary) {
  return Array.isArray(ary) ? ary.slice(1).concat(ary[0]) : undefined;
}

// tests

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]