// 8 kyu
// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

const binToDec = bin => parseInt(bin, 2)


// Solution using ES6 trick

const binToDec = s => '0b' + s - 0