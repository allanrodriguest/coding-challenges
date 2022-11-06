// If you can't sleep, just count sheep!!

// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  if (num.length === 0) return ''
  let i = 1
  let result = ''
  while (num > 0) {
    result += `${i} sheep...`
    i++
    num--
  }
  return result
}