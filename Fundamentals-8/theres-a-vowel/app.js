// 8 kyu
// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

const vowels = {
  97: 'a',
  101: 'e',
  105: 'i',
  111: 'o',
  117: 'u'
}
function isVow(arr) {
  return arr.map(el => (vowels.hasOwnProperty(el) ? vowels[el] : el))
}