// 8 kyu
// Training JS #6: Basic data types--Boolean and conditional statements if..else

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

const trueOrFalse = val => (val ? 'true' : 'false')

// Solution using Boolean obj and toString method

function trueOrFalse(val) {
  return Boolean(val).toString()
}