// 8 kyu
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function remove(s, n) {
  let counter = 0
  let str = s.split('')
  for (let i = 0; i < str.length && counter < n; i++) {
    if (str[i] == '!') {
      str[i] = ''
      counter++
    }
  }
  return str.join('')
}

// simplified solution

function remove(s, n) {
  for (var i = 0; i < n; i++) s = s.replace('!', '')
  return s
}

// Solution using recursion

function remove(s, n) {
  return n > 0 ? remove(s.replace('!', ''), n - 1) : s
}