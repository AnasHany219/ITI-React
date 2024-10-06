/**
 * The findIndex() method
 * returns the index of the first element in an array that satisfies a given condition (a test function).
 * If no elements satisfy the condition, it returns -1.
 */

const numbers = [4, 9, 16, 25, 29];

const index = numbers.findIndex((num) => num > 15);

console.log(index); // Output: 2
