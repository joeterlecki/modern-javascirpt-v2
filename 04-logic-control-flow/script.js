/**
 * IF ELSE STATEMENTS
 */

// const d = new Date(10, 30, 2022, 21, 0, 0)
// const hour = d.getHours()

// console.log(hour)

// // if (hour < 12) {
// //   console.log("Good Morning")
// // } else if (hour < 18 && hour > 12) {
// //   console.log("Good Afternoon")
// // } else {
// //   console.log("Good Night")
// // }

// if (hour < 12) {
//   console.log("Good Morning")
//   if (hour === 6) {
//     console.log("WAKE UP")
//   }
// } else if (hour < 18 && hour > 12) {
//   console.log("Good Afternoon")
// } else {
//   console.log("Good Night")
//   if (hour >= 20) {
//     console.log("GO TO BED")
//   }
// }

/**
 * SWITCH STATEMENTS
 */

// const d = new Date(2023, 1, 20, 8, 0, 0)
// const month = d.getMonth()

// console.log(month)

// switch (month) {
//   case 1:
//     console.log("It is January")
//     break
//   case 2:
//     console.log("It is February")
//     break
//   case 3:
//     console.log("It is March")
//     break
//   default:
//     console.log("Its any month but the other 3")
// }

// const hour = d.getHours()
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning")
//     break
// }

// const calculator = (n1, n2, op) => {
//   let result
//   switch (op) {
//     case "+":
//       result = n1 + n2
//       return result
//     case "-":
//       result = n1 - n2
//       return result
//     case "*":
//       result = n1 * n2
//       return result
//     case "/":
//       result = n1 / n2
//       return result
//     default:
//       return `${op} is not valid, Please enter a valid operator`
//   }
// }
// console.log(calculator(5, 2, "^"))

/**
 * TRUTHY AND FALSY
 */
const userEmail = "email@email.com"

if (userEmail) {
  console.log("You passed and email: TRUE")
}

// A string with any value in it is TRUTHY
console.log(Boolean(userEmail))

// FALSEY VALUES
// false
// 0
// "" or ''
// null
// undefined
// Nan

// TRUTHY VALUES
// Everythin else thats not falsy
// true
// '0' in a stirng
// ' ' Space in a string
// 'false' in a string
// [] empy array
// {} empty object
// function () {} empty function
// const x = 0

// if (x) {
//   console.log("THIS IS TRUTHY")
// } else {
//   console.log("THIS IS FALSY")
// }

// console.log(Boolean(x))

/**
 * COALESCING OPERATOR
 * returns the right side when left is null or undefined
 */
// let c
// c = 10 ?? 20 // returns 10
// c = null ?? 20 // returns 20
// c = undefined ?? 30 // returns 30
// c = 0 ?? 30 // returns 0
// c = "" ?? 30 //returns ""
// console.log(c)

/**
 * LOGICAL ASSIGNMENT OPERATORS
 */

// ||= assigns the right side value only if the left is a falsy value
// let a = false
// if (!a) {
//   a = 20
// }

// a = a || 10 //same as above but short hand
// a ||= 10 // even more shorthand

// &&= asigns the right side value only if the left is a truthy value
// let b = 20
// if (b) {
//   b = 30
// }

// b = b && 30
// b &&= 20
// console.log(b)

// ??= nullish coalescing. Assignes the right side value only if the left is null or undefined
// let c = null
// if (c === null || c === undefined) {
//   c = 40
// }

// c = c ?? 40
// c ??= 40

// console.log(c)

/**
 * THE TERNARY OPERATOR
 */
const age = 33

// using if statement
if (age >= 18) {
  console.log("YOU CAN VOTE")
} else {
  console.log("YOU CAN NOT VOTE")
}

// ternary style
age >= 18 ? console.log("YOU CAN VOTE") : console.log("YOU CANT VOYE")

const canVote = age >= 18 ? true : false
const canVote2 = age >= 18 ? "YOU CAN" : "YOU CANT"

const auth = true
// let redirect

// if (auth) {
//   alert("YOU ARE LOGGED IN")
//   redirect = "/dashboard"
// } else {
//   alert("ACCESS DENIED")
//   redirect = "/login"
// }

const redirect = auth
  ? (alert("WELCOME"), (redirect = "/dashboard"))
  : (alert("ACCESS DENIED"), (redirect = "/login"))

console.log(redirect)

// auth ? console.log("WELCOME TO DASH") : null
auth && console.log("WELCOME") // same as above
