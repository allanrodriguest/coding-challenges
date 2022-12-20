// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Math.ceil() Solution

const century = year => Math.ceil(year / 100)


// Bitwise Insane Solution

const century = year =>
  (n =>
    (p => (q => q + (n - q * 100 > 99))((p + (p >> 20)) >> 6))(
      (n >> 1) +
        (n >> 3) +
        (n >> 6) -
        (n >> 10) +
        (n >> 12) +
        (n >> 13) -
        (n >> 16)
    ))(year + 99)