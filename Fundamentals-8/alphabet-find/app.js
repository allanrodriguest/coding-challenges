// 8 kyu
// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const position = letter =>
  `Position of alphabet: ${alphabet.indexOf(letter) + 1}`

// Solution only works for lowerCase letters


const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`