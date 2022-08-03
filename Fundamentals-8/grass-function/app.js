// 8 kyu
// Grasshopper - Function syntax debugging

// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

const main = (a, b) => `${a}${b}`

// CO0L solutions

const main = (...a) => a.join('')

const main = String.prototype.concat.bind('')