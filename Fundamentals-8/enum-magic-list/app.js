// 8 kyu
// Enumerable Magic - Does My List Include This?

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

const include = (arr, item) => arr.includes(item)

// Solution using indexOf

function include(arr, item) {
  return arr.indexOf(item) !== -1
}