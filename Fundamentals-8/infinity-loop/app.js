// 8 kyu
// Unfinished Loop - Bug Fixing #1

// DESCRIPTION:
// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

const createArray = n => Array(...Array(n)).map((v, i) => i + 1)

// Solution number 2

function createArray(number) {
  return Array.from({ length: number }, (v, i) => i + 1)
}