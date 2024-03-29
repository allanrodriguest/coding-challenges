// 8 kyu
// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let result = []

  a.forEach(el => {
    if (!result.includes(el)) {
      result.push(el)
    }
  })
  return result
}

// Solution using Set

function distinct(a) {
  return [...new Set(a)]
}

// Solution using filter

const distinct = a => a.filter((item, index) => a.indexOf(item) === index)