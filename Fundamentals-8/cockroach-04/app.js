// 8 kyu
// Beginner Series #4 Cockroach

// DESCRIPTION:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

const cockroachSpeed = s => Math.floor(27.7778 * s)

// Solution using OR to convert left side float to 32-bit signed interger

const cockroachSpeed = s => (s / 0.036) | 0
