// 8 kyu
// Unfinished Loop - Bug Fixing #1

// DESCRIPTION:
// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!


// Original Solution

function createArray(number) {
  var newArray = []
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter)
  }
  return newArray
}


// Refactoring

const createArray = n => Array(...Array(n)).map((v, i) => i + 1)

// Refactoring #2

function createArray(number) {
  return Array.from({ length: number }, (v, i) => i + 1)
}