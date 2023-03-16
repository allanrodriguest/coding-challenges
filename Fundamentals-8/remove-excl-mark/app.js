// 8 kyu
// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

const remove = str => (str.endsWith('!') ? str.slice(0, -1) : str)

// Solution using RegEx

const remove = s => s.replace(/!$/, '')