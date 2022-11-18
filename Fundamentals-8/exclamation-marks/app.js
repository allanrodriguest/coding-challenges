// 8 kyu
// Remove exclamation marks

// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replaceAll('!', '')
}

// Using split() join()

function removeExclamationMarks(s) {
  return s.split('!').join('')
}