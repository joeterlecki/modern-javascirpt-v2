// console.log("hello")
// console.log(20, "hi", false)

// const x = 5
// console.log(x)

// console.error("Alert")
// console.warn("Warning")
// console.table({ name: "Joe" })

// console.group("simple group")
// console.log("hi")
// console.warn("bye")
// console.groupEnd()

// const styles = "padding: 5px; background-color: blue;"

// console.log("%cHello world", styles)

/*
 * VARIABLE DECLARATION
  var let and const are the main three ways to set a variable
  var is not used anymore and is legacy
  var and let in GLOBAL scope work in similar ways
 */

// let firstName = "Joseph"
// let lastName = "Terlecki"

// // console.log(age) this doesnt work because you cant access a variable that hasnt been declated yet
// console.log(firstName, lastName)

// let age = 30

// // naming conventions
// // letters, numbers, underscores and dollar signs

// // camelCase under_score PascalCase lowercase

// age = 33
// console.log(age)

// let userScore

// userScore = 99999
// console.log(userScore)

// const x = 1000

// const nums = [1, 2, 3, 4]
// // nums = [1, 2, 3, 4, 5] doesnt work becayse its const

// nums.push(5) // this works

// const user = {
//   userName: "jterlecki",
// }

// user.userName = "joeterlecki"

// // object and array methods allow us to manipulate the variable even if its a const type
// // use const unless you know your directly going to reasign it such as changing age to another value

// // arrays and objects hardly ever get reassigned
// //

// let a, b, c
// const d = 10,
//   e = 30,
//   f = 50

// console.log(d)

/**
 * DATA TYPES
 *
 * PRIMITIVES
 *
 * STRINGS = a sequence of characters. Must be in quotes or backticks
 * NUmber = Integers and floating point numbers
 * Boolean = logical entity that can be true or false
 * Null = Intentional absence of any object value
 * Undefined = A variable that has not yet been defined / assigned
 * Sybol = build in object whose constructore returns a unique symbol
 * BigInt = Numbers that are greater than what a default Number can contain
 *
 * REFERENCE
 *
 * Objects, arrays, and functions are examples of reference types
 *
 * Javascript is a Dynamic Typed Language
 * TypeScript can allow Static typing to javascript
 *
 * Primitive types are stored directly on the call stack and is accessed from there
 * for example string, number, bool, null, undefined, symbo BgiIng
 *
 * Reference Types
 * are stored in the head and accessed by its mermory referecne
 * arrays functions and objects
 */

// string
// const firstName = "Joe"
// const lastName = "Terlecki"

// const age = 33
// const perc = 99.9
// const isMarried = true

// const aptNumber = null // returns an object type and a bug of javascript
// let score
// // const score1 = undefined

// const id = Symbol("id")
// const n = 4353463476345346346346346346n

// console.log(firstName, typeof firstName)
// console.log(age, typeof age)
// console.log(perc, typeof perc)
// console.log(isMarried, typeof isMarried)
// console.log(aptNumber, typeof aptNumber)
// console.log(score, typeof score)
// console.log(id, typeof id)
// console.log(n, typeof n)

// // REFERENCE TYPES
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers, typeof numbers)

// const person = {
//   first: "joe",
// }

// console.log(person, typeof person)

// function hello() {
//   console.log("Hello")
// }

// console.log(hello, typeof hello) // returns function type

// const name = "joe"
// const newAge = 33

/**
 * TYPE CONVERSION
 */

// let total = "100"
// console.log(total, typeof total)

// total = parseInt(total)
// // unary operator
// total = +total
// total = Number(total)
// console.log(total, typeof total)

// // change back to string
// total = total.toString()
// total = String(total)
// console.log(total, typeof total)

// let amount = "99.5"
// amount = parseFloat(amount)
// console.log(amount, typeof amount)

// let num = 1
// // i is a truthy value and 0 is a falsey value
// // any other number is  truthy
// num = Boolean(num)
// console.log(num, typeof num)

// let testNan = "hello"
// testNan = parseInt(testNan)
// console.log(testNan, typeof testNan)

/**
 * OPERATORS
 */
// Assignment operators

// let x = 10
// x += 5
// x -= 5
// x *= 5
// x /= 5
// x %= 5
// x **= 5
// console.log(x)

// // comparison opeartors
// x = 5 == 2 // take the result and see if its == to 5 | false
// x = 5 == 5 // take the result and see if == to 5 | true
// // double equal tests the value and not the tyep
// // triple equal evaluates the type and value of condition

// x = 5 === "5" // use TRIPLE MOST OF THE TIME

// x = 5 != "5" // nt equal to 5 | false
// x = 5 !== "5" // nt equal to 5 | true
// x = 10 >= 5

// console.log(x)

/**
 * Type COERCION
 */
// let x

// x = 7 + "7" // returns 77 string
// x = 7 + Number("7") // returns 14 number

// x = 7 * "7" // returns 49 Number

// x = 7 + null // returns 7 Number

// x = Number(null) // returns 0 Number

// x = 7 + true // returns 8 Number

// x = 7 + false // retrusn 7 number

// x = 7 + undefined // returns Nan number

// console.log(x, typeof x)

/**
 * Working With Strings
 */
// let x
// const name = "joe"
// const age = 33

// // x = "Hello, " + name + " my age is " + age

// // template literals
// x = `Hello, my name is ${name} and my age is ${age}`

// // string properties and methods
// // properties dont usse paraenthesie while methods do
// // props are more like attributes

// let s = "Hello World"
// x = s.length
// x = s[1] // access index of string

// s = new String("Hello Object")
// x = s.__proto__

// x = s.toUpperCase()
// x = s.toLowerCase()

// x = s.charAt(4)
// x = s.indexOf("o")

// x = s.substring(1, 4)
// x = s.substring(7)

// // slices allow you to start at the end with a negative
// x = s.slice(0, 5)

// x = s.slice(-11, -6)

// // x = s.trim() // trims the whitespace at the ends

// x = s.replace("Object", "there")

// x = s.includes("Hello") // return true

// x = s.valueOf()

// x = s.split(" ")
// console.log(x)

/**
 * CAPTIALIZE CHALLANGE
 */
// const myString = "devops"
// let capitalString = myString.slice(0, 1).toUpperCase() + myString.slice(1)
// capitalString = `${myString[0].toUpperCase()}${myString.slice(1)}`
// console.log(capitalString)

/**
 * NUMBERS
 */

// let x
// const num = new Number(7) // turn it into an object

// x = num.toString().length

// x = num.toFixed(2) // two decimal places 7.00

// x = num.toPrecision(2) // gives prevcisley two | 7.0

// x = num.toExponential(2)

// x = num.toLocaleString("ar-EG") // returns regional locale string

// x = num.valueOf()

// x = Number.MAX_VALUE // largest posible number

// x = Number.MIN_VALUE // lowest
// console.log(x, typeof x)

/**
 * MATHOBJECTS
 */

// let x

// x = Math.sqrt(9)
// x = Math.abs(-5)

// x = Math.round(4.2)

// x = Math.ceil(4.2) // rounds up to 5
// x = Math.floor(4.9) // rounds down to 4

// x = Math.pow(2, 3)

// x = Math.min(5, 7, 9)

// x = Math.max(5, 9, 11)

// x = Math.random()

// x = Math.random() * 10 // a decimal between 0 and 9

// x = Math.random() * 10 + 1 // random  decimal number betwwen 1 and 10

// x = Math.floor(Math.random() * 10 + 1)

// console.log(x)

/**
 * NUMBER CHALLANGE
 */
// let x = Math.floor(Math.random() * 100 + 1)
// let y = Math.floor(Math.random() * 50 + 1)

// console.log(`The sum of ${x} and ${y}: ${x + y}`)
// console.log(`The difference of ${x} and ${y}: ${Math.abs(x - y)}`)
// console.log(`The product of ${x} and ${y}: ${x * y}`)
// console.log(`The quotient of ${x} and ${y}: ${x / y}`)
// console.log(`The remainder of ${x} and ${y}: ${x % y}`)

/**
 * DATE AND TIMES
 */

// let d

// d = new Date()

// d = d.toString()
// d = new Date(2022, 6, 10, 12, 30, 0) // dayss are 0 based
// d = new Date("2022-07-02T12:30:00")
// d = new Date("07/02/2022 12:30:00")
// d = new Date("2023-07-02") // this makes the actual day the first because time zones? unless you set month first

// d = Date.now() // milliseconds in time
// d = new Date("07-02-2022 12:30:00")
// d = d.getTime()

// d = d.valueOf()

// d = new Date(1656779400000) // get the date from time stamp

// d = Math.floor(Date.now() / 1000) // get timestampl in seconds

// console.log(d, typeof d)

/**
 * DATE METHODS AND TIME FORMAT API
 */
let x
let d = new Date()

x = d.toString()
x = d.getTime()
x = d.valueOf()

x = d.getFullYear()
x = d.getMonth() + 1 // 0 based

x = d.getDate()
x = d.getDay()

x = d.getHours()
x = d.getMinutes()

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

x = Intl.DateTimeFormat("en-US").format(d)
x = Intl.DateTimeFormat("en-GB").format(d)
x = Intl.DateTimeFormat("default", { month: "long" }).format(d)

x = d.toLocaleString("default", { month: "short" })
x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
})

// DateTime FOrmat API is the newer better way of doing things

console.log(x)
