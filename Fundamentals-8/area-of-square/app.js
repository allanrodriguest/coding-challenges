// 8 kyu
// Area of a Square

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
  let radius = (A * 4) / (2 * Math.PI)
  return Math.pow(radius, 2)
}