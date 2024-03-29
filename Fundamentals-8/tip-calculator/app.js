// 8 kyu
// Tip Calculator

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  let answer = rating.toLowerCase()
  switch (answer) {
    case 'terrible':
      return 0
    case 'poor':
      return Math.ceil(0.05 * amount)
    case 'good':
      return Math.ceil(0.1 * amount)
    case 'great':
      return Math.ceil(0.15 * amount)
    case 'excellent':
      return Math.ceil(0.2 * amount)
    default:
      return 'Rating not recognised'
  }
}

// Great Solution

let calculateTip = (amount, rating) => {
  const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(
    rating.toLowerCase()
  )
  return i === -1 ? 'Rating not recognised' : Math.ceil(i * amount * 0.05)
}