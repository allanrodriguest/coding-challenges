// DESCRIPTION:
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

function multiply(number) {
  const n1 = '' + number,
    FIVE = 5
  return number * FIVE ** (n1[0] == '-' ? n1.slice(1).length : n1.length)
}
