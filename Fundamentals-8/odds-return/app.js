// 8 kyu
// Are arrow functions odd?

// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

const odds = arr => [...arr].filter(el => !!(el & 1))

// Add Solution #2

const odds = arr => [...arr].filter(el => el % 2)