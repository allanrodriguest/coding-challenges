// 8 kyu
// Is it a palindrome?

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let palind = x.split('').reverse().join('').toLowerCase()
  return x.toLowerCase() === palind
}