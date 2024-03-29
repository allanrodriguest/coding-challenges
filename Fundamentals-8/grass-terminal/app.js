// 8 kyu
// Grasshopper - Terminal game combat function

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

const combat = (health, damage) => (health - damage > 0 ? health - damage : 0)

// Solution using Math.max()

const combat = (health, damage) => Math.max(0, health - damage)