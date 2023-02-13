/**
 * FUNCTIONS AND SCOPE
 */

// function greeting() {
//   console.log("GREETINGS!")
// }

// greeting()

// function add(num1, num2) {
//   let total = num1 + num2
//   console.log(total)
//   return total
// }

// add(5, 5)

// function subtract(num1, num2) {
//   return num1 - num2
// }

// let result = subtract(10, 3)
// console.log(result)
// console.log(result, subtract(20, 5))

/**
 * ARGUMENTS AND PARAMS
 */
// function registerUser(user = "luna") {
//   return user + " is registered"
// }

// console.log(registerUser("joe"))
// console.log(registerUser())

// // rest params
// function sum(...numbers) {
//   let total = 0
//   for (const num of numbers) {
//     total += num
//   }
//   return total
// }

// console.log(sum(3, 4, 5, 6, 7, 8, 100))

// // OBJECT AS PARAMS
// function loginUser(user) {
//   return `The user ${user.name} with the id of ${user.id} is logged in`
// }

// const user = {
//   id: 1,
//   name: "john",
// }

// console.log(loginUser(user))
// console.log(
//   loginUser({
//     id: 2,
//     name: "sara",
//   })
// )

// // ARRARYS AS PARAMS
// // function getRandom(arr) {
// //   const randomIndex = Math.floor(Math.random() * arr.length)

// //   const item = arr[randomIndex]
// //   console.log(item)
// // }

// // getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// // doing with rest operator allows any number of params and puts them into an array thats
// // processeed rather than passing in an array
// function getRandom(...arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length)

//   const item = arr[randomIndex]
//   console.log(item)
// }

// getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

/**
 * BLOCK SCOPE
 */

// const x = 100
// if (true) {
//   const y = 200
//   console.log(x + y)
// }

// // console.log(x + y) // doesnt work becuase scope

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// // console.log(i) // 'i' is scoped to the loop

// if (true) {
//   const a = 500
//   let b = 600
//   var c = 700
// }

// console.log(c) // var is not block scoped and allows it be accessed outside of the block
// // var is function scoped

// function run() {
//   var d = 1000
//   console.log(d)
// }

// run()
// // console.log(d) // This does not work with var

// const foo = 1
// var bar = 2

// // global variables with var gets added to the window obejct. This does not happen with let and const
// // NEVER USE VAR!!!!!

// // nested scope
// // child function has access to parent scope
// // parent cant access child scope
// // this is simlar with blocks
// function first() {
//   const x = 100
//   function second() {
//     const y = 200
//     console.log(x + y)
//   }
//   second()
// }

// if (true) {
//   const x = 100
//   if (x === 100) {
//     const y = 200
//     console.log(x + y)
//   }
// }

// first()

/**
 * FUNCTION DECLARATION VS EXPRESSION
 */

// function declaration
// function addDollarSign(value) {
//   return "$" + value
// }

// console.log(addDollarSign(100))

// // Function expression
// const addPlusSign = function (value) {
//   return "+" + value
// }

// console.log(addPlusSign(200))
// // they are invoked the same way
// // hoisting is the process is moving all the function declaration to top of current scope before it is executed
// // you can call addDOllarSign before its declared using hoisting
// // does not work with function expression

/**
 * ARROW FUNCTIONS
 */
// // advantage of arraow functions
// // they ate compact, implicit return, and lexical scope

// // function add(a, b) {
// //   return a + b
// // }

// // regurlar arrow functiom
// const add = (a, b) => {
//   return a + b
// }

// // if you only have one line and want to implicit return
// // do the following
// const substract = (a, b) => a - b

// // if you only have a single parameter you dont need the parenthesis
// // prettier keeps adding them back
// const double = (a) => a * 3
// // const double = a => a * 3

// // returning an object
// const createObject = () => ({
//   fullName: "Joe Terlecki",
// })

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.forEach(function (n) {
//   console.log(n)
// })

// // arrow function in a callback
// numbers.forEach((n) => console.log(n))

// console.log(add(1, 2))
// console.log(substract(5, 2))
// console.log(createObject())

/**
 * Immeidaltey invoked function IIFE's
 */

// allows us to create and invoke the function at the SAME TIME
// you would wnat to do this is to avoid global scope collusion
// example would be 3rd party library

// ;(function () {
//   const user = "Brad"
//   console.log(user)
//   const hello = () => console.log("Hello from IIFE")
//   hello()
// })()

// // with params
// ;(function (name) {
//   console.log("HELLO " + name)
// })("LUNA")

// // you can name them if needed for debugging
// ;(function hello(name) {
//   console.log("HELLO " + name)
// })("LUNA")

/**
 * FUNCTION CHALLANGES
 */

// function convertCelsius(value) {
//   return (value - 32) * 0.5556
// }

// const convertCelsius = (value) => (value - 32) * 0.5556

// console.log(`The temp is ${convertCelsius(75)} \xB0C`)

// const minMax = (arr) => `min: ${Math.min(...arr)}, max: ${Math.max(...arr)}`

// console.log(minMax([1, 2, 3]))
// ;((len, width) => {
//   console.log(len * width)
// })(3, 2)

/**
 * EXECUTION CONTEXT
 * Is the environment created that transforms and executes the javascript code in the browser or node v8 engine
 * It contains the current executed code and everything that aids the execution
 *
 * Global execution context and a function execution contexts exist
 * Function contexts live the span of the function life. once its done executing the execution env is gone
 *
 * Javascript is single thread language and syncrhonous at its core but have some asyn capabilities
 *
 * The exution context phases
 * THE MEMORY CREATION phse
 * 1.  to create the global object (window/borwser or global/node)
 * 2. Creates the this object abd binds it to the global obkect
 * 3. Sets up the memory heap to store variables and function references
 * 4. sote the function and variable values to undefined. These dont get their values till the execution phase
 *
 * THE EXECUTION PHASE
 * 1. Executre the code line by line
 * 2. Create a new execution context for each function call
 */

const x = 150
const y = 75

function sum(n1, n2) {
  const total = n1 + n2
  return total
}

const sum1 = sum(x, y)
const sum2 = sum(200, 500)

console.log(sum1, sum2)

/**
 * THE CALL STACK
 * The stack of functions to be executed
 * Manges our execution contexts
 * stacks are LIFO last in first out
 *
 * We can see the call stack in the browser degbugger under sources
 *
 */
