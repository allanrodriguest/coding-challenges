// 8 kyu
// Grasshopper - Debug sayHello

// DESCRIPTION:
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

const sayHello = _ => `Hello, ${_}`

// Hard challenge tho

const sayHello = function (name) {
  return ['Hello', name].join(', ')
}