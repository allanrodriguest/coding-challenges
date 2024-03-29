// Fake Binary

// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

const fakeBin = x =>
  x
    .split('')
    .map(item => (item < 5 ? 0 : 1))
    .join('')


// Solution using RegEx

function fakeBin(x) {
  return x.replace(/\d/g, n => '0000011111'[n])
}