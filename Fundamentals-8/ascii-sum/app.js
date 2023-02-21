// DESCRIPTION:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

const uniTotal = str =>
  str
    .split('')
    .map(item => item.charCodeAt(0))
    .reduce((acc, c) => acc + c, 0)

// Simplified solution

const uniTotal = str =>
  str.reduce((acc, c) => acc + c.charCodeAt(0), 0)