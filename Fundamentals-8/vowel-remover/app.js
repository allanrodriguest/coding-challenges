// 8 kyu
// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

const shortcut = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return str
    .split('')
    .filter(item => !vowels.includes(item))
    .join('')
}