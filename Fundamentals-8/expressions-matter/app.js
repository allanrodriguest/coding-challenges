// 8 kyu
// Expressions Matter

// DESCRIPTION:
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

function expressionMatter(a, b, c) {
  let answer1 = a * (b + c)
  let answer2 = a * b * c
  let answer3 = a + b * c
  let answer4 = (a + b) * c
  let answer5 = a + b + c
  return Math.max(answer1, answer2, answer3, answer4, answer5)
}