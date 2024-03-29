// Reversed sequence

// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let reverse = []

  for (let i = n; i > 0; i--) {
    reverse.push(i)
  }
  return reverse
}

// Solution using .fill and .map

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

// Solution using Array.from()

const reverseSeq = length => Array.from({length}, () => length--)