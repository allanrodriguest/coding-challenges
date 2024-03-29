// 8 kyu
// Grasshopper - Personalized Message

// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`