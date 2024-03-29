// 8 kyu
// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let answer = ''
  for (let i = 0; i < size; i++) {
    i % 2 == 0 ? (answer += '1') : (answer += '0')
  }
  return answer
}

// Solution using padStart

const stringy = x => ''.padStart(x, '10')

// Solution using repeat and slice()

const stringy = size => '10'.repeat(size).slice(0, size)

// Solution using Array.from

const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('')