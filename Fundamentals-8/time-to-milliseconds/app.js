// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

const past = (hrs, min, sec) => (hrs * 60 * 60 + min * 60 + sec) * 1000

// Solution using Date object

function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s)
  const midnight = new Date().setHours(0, 0, 0)

  return Math.round(setTime - midnight)
}