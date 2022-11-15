// 8 kyu
// Sum Mixed Array

// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

const sumMix = arr => arr.map(item => +item).reduce((acc, c) => acc + c, 0)