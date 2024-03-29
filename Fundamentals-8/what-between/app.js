// 8 kyu
// What is between?

// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let inBetween = []
  for (let i = a; i <= b; i++) {
    inBetween.push(i)
  }
  return inBetween
}

// Solution using Array object

const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i)

// solution using the spread operator

const between = (a, b) => [...Array(b - a + 1)].map((_, idx) => idx + a)