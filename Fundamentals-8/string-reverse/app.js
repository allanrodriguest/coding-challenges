// Complete the solution so that it reverses the string passed into it.

// INPUT: 'world'  =>  OUTPUT: 'dlrow'
// INPUT: 'word'   =>  OUTPUT: 'drow'

// 1st solution

function solution(str) {
  return str.split('').reverse().join('')
}

// Clever solution

const solution = s => [...s].reverse().join('')