// 8 kyu
// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

const nameShuffler = str => str.split(' ').reverse().join(' ')

// solution using regEx

function nameShuffler(str) {
  return str.replace(/(\S*) (\S*)/g, '$2 $1')
}