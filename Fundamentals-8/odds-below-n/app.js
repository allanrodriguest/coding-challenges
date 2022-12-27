// 8 kyu
// Count Odd Numbers below n
// DESCRIPTION:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

function oddCount(n) {
  return Array.from({ length: n }, (v, i) => i).filter(
    item => !(item % 2 === 0)
  ).length
}

// Simplier Solution

const oddCount = n => Math.floor(n / 2)

// Could be using parseInt too

function oddCount(n) {
return parseInt(n / 2)
}