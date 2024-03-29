// 8 kyu
// Grasshopper - Messi Goals

// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

const laLigaGoals = 43,
  championsLeagueGoals = 10,
  copaDelReyGoals = 5
let goals = [43, 10, 5]
let totalGoals = goals.reduce((acc, c) => acc + c, 0)