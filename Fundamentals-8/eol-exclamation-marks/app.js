// 8 kyu
// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(str) {
  while (str[str.length - 1] == '!') {
    str = str.slice(0, -1)
  }
  return str
}

// Solution using RegEx

const remove = s => s.replace(/!+$/, '')