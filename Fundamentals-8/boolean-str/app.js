// Create a method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// First solution

function boolToWord(bool) {
  return bool ? 'Yes' : 'No'
}

// Fancy solution

function boolToWord(bool) {
  return ['No', 'Yes'][+bool]
}

