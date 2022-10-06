// 8 kyu
// Sum without highest and lowest number

// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (!array || array.length < 3) return 0
  array.sort((a, b) => a - b).pop()
  array.shift()
  return array.reduce((acc, c) => acc + c, 0)
}

// Solution using slice

function sumArray(a) {
  return a == null || a.length < 3
    ? 0
    :
      a
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0)
}

// Solution using Math.max and Math.min

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}