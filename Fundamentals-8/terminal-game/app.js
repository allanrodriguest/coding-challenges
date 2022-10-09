// 8 kyu
// Grasshopper - Terminal game move function

// DESCRIPTION:
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

const move = (p, d) => p + d * 2

// (Had to Share SolutioN)

const move = (_, $, _$) => _ + [(_$ = -~[]), ++_$][-~[]] * $

// Let's break -~[] down first.

// [], when converted to a number, is 0.

// ~ is a bitwise operator that inverts the bits of a number, what it basically does is -(x + 1).
// So in this case 0 becomes -1, because -(0 + 1) === -1.

// The - cancels the - that -1 already has, so it becomes 1.

// Translated, this function means:

// const move = (pos, roll, num) => (pos + [num = 1, ++num][1] * roll);
// ...or const move = (pos, roll) => pos + [1, 2][1] * roll;
// ...or const move = (pos, roll) => pos + 2 * roll;