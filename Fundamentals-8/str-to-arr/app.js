// Convert a string to an array

// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function arrayPlusArray(arr1, arr2) {
  return (
    arr1.reduce((acc, c) => acc + c, 0) + arr2.reduce((acc, c) => acc + c, 0)
  )
}