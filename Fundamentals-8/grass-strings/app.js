// 8 kyu
// Grasshopper - Combine strings

// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

const combineNames = (str1, str2) => [str1, str2].join(' ')

// Solution using spread operator

const combineNames = (...names) => names.join(' ')