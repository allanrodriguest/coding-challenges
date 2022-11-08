// Get the mean of an array

// DESCRIPTION:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const getAverage = marks =>
  Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length)

// Double bitwise NOT ~~ is performed on the average as a more compact approximation to the Math.floor method.

const getAverage = marks => ~~(marks.reduce((s, v) => s + v) / marks.length)