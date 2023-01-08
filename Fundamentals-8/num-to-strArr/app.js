// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(str) {
  return String(str).split('').reverse().map(Number)
}

// Improved Perfomance

function digitize(n) {
  n += ''
  const result = []
  for (let l = 0; l < Math.ceil(n.length / 2); l++) {
    let r = n.length - 1 - l
    result[l] = n.charAt(r) << 0
    result[r] = n.charAt(l) << 0
  }
  return result
}