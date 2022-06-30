// 8 kyu
// Training JS #8: Conditional statement--switch

// In JavaScript, switch can replace multiple if statements.


// switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. If no case statements match, default is entered.

// In some instances, the switch statement is clearer than the if..else statement.

const daysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const howManydays = month => daysInAMonth[month - 1] 