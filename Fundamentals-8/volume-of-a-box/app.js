// 8 kyu
// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  let result = []
  result.push(2 * (height * width + height * depth + width * depth))
  result.push(width * height * depth)
  return result
}