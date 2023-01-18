// 8 kyu
// Powers of 2

// DESCRIPTION:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
  let result = [1]
  for (let i = 1; i <= n; i++) {
    result.push(result[i - 1] * 2)
  }
  return result
}

// Solution using Array.from

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k)
}