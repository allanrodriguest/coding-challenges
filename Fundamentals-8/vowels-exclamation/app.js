// 8 kyu
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return s
    .split('')
    .map(item => (vowels.includes(item) ? '!' : item))
    .join('')
}

// Solution using regex

function replace(s) {
  return s.replace(/[aeoiu]/gi, '!')
}

