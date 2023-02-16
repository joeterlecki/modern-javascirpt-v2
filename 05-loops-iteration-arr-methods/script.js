/**
 * FOR LOOPS
 */

// for (let i = 0; i <= 10; i++) {
//   console.log(`Number: ` + i)
// }

// // nesting
// for (let i = 1; i <= 10; i++) {
//   console.log("Number" + i)
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// // Loop through arra
// // we can use for each now for high order
// const names = ["joe", "becky", "luna", "lyra"]

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === "Lyra") {
//     console.log(`${names[i]} is the best girl`)
//   } else {
//     console.log(`Hello ${names[i]}`)
//   }
// }

// /**
//  * BREAK AND CONTINUE
//  */

// for (let i = 0; i <= 20; i++) {
//   if (i === 16) {
//     console.log("BREAKING...")
//     break
//   }
//   console.log(i)
// }

// for (let i = 0; i <= 20; i++) {
//   if (i === 13) {
//     console.log("SKIPPING FLOOR 13")
//     // breaks current iteration and continues to next index.
//     // in this case if the floor number is 13 it will not process
//     continue
//   }
//   console.log(i)
// }

/**
 * WHILE AND DO WHILE LOOPS
 * Maybe old school because of higher order function loop array
 * and for in and for of loops
 */
// let i = 0
// while (i <= 20) {
//   console.log("Number " + i)
//   i++
// }
// loop over array
// const arr = [10, 20, 30, 40]
// while (i < arr.length) {
//   console.log(arr[i])
//   i++
// }

// while (i <= 5) {
//   console.log("number " + i)
//   let j = 1
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`)
//     j++
//   }
//   i++
// }

/**
 * DO while
 * will run atleast once even if the condition is false
 */
// do {
//   console.log("Number " + i)
//   i++
// } while (i <= 20)

/**
 * FIZZ BUZZ CHALLANGE
 */
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(`Number ${i} IS FIZZBUZZ`)
//   } else if (i % 3 == 0) {
//     console.log(`NUMBER ${i} is FIZZ`)
//   } else if (i % 5 === 0) {
//     console.log(`NUMBER ${i} is BUZZ`)
//   }
// }
/**
 * FOR-OF LOOP
 */
// const arr = ["book", "table", "chair", "desk"]
// const users = [
//   {
//     id: "1",
//     fullName: "Joe",
//   },
//   {
//     id: "2",
//     fullName: "becky",
//   },
//   {
//     id: "3",
//     fullName: "luna",
//   },
// ]
// for (const item of arr) {
//   console.log(item)
// }

// for (const user of users) {
//   console.log(user.fullName)
// }

// const bigString = "This is my big string for iteration"
// for (const char of bigString) {
//   console.log(char)
// }

// const map = new Map()
// map.set("name", "joe")
// map.set("age", 33)

// for (const [k, v] of map) {
//   console.log(k + " " + v)
// }

/**
 * FOR IN LOOP
 * loop through object values
 */

// const colors = {
//   color1: "red",
//   color2: "blue",
//   color3: "green",
// }

// for (const k in colors) {
//   console.log(k, colors[k])
// }

// const colorsArr = ["red", "green", "blue"]
// for (const color in colorsArr) {
//   console.log(colorsArr[color])
// }

/**
 * High order array methods
 * FOREACH
 */

// const socials = ["twitter", "linkedin", "facebook", "instagram"]
// // console.log(socials.__proto__)

// // socials.forEach(function (profile) {
// //   console.log(profile)
// // })

// socials.forEach((profile, index, arr) =>
//   console.log(`${index}: ${profile} \n${arr}`)
// )

// function logSocials(social) {
//   console.log(social)
// }

// socials.forEach(logSocials)

// const socialProfile = [
//   { name: "twitter", id: 1 },
//   { name: "facebook", id: 2 },
//   { name: "instagram", id: 3 },
// ]

// socialProfile.forEach((profile) => console.log(profile.name))

/** ARRAY FILTER METHOD */
// const names = ["becky", "luna", "lyra", "joe", "kitty"]
// const result = names.filter((name) => name.length <= 3)
// console.log(result)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numResult = numbers.filter((num) => num % 2 === 0)
// console.log(numResult)

// const people = [
//   { fullName: "joe terlecki", gender: "male", age: 33 },
//   { fullName: "becky terlecki", gender: "female", age: 39 },
//   { fullName: "luna terlecki", gender: "female", age: 4 },
// ]

// const females = people.filter((person) => person.gender === "female")
// console.log(females)

/**
 * ARRAY MAP
 */

// const employees = [
//   { name: "becky", id: 1, gender: "female" },
//   { name: "luna", id: 2, gender: "female" },
//   { name: "lyra", id: 3, gender: "female" },
//   { name: "joe", id: 4, gender: "male" },
// ]

// // create an array of all femail employees
// const empNames = employees.map((emp) => emp.name)
// console.log(empNames)

// const idsNames = employees.map((emp) => {
//   return {
//     name: emp.name,
//     id: emp.id,
//   }
// })

// console.log(idsNames)

// IMportant to note you can chain map methods .map().map().map()

/**
 * ARRAY REDUCE
 */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const sum = numbers.reduce((accumalator, currentVal) => {
// //   return accumalator + currentVal
// // }, 0)

// // const sum = numbers.reduce((acc, cur) => acc + cur, 0) // returns 55
// const sum = numbers.reduce((acc, cur) => acc + cur, 10) // returns 65
// console.log(sum)

// const cart = [
//   { id: 1, name: "product1", price: 100 },
//   { id: 2, name: "product2", price: 100 },
//   { id: 3, name: "product3", price: 200 },
//   { id: 4, name: "product4", price: 250 },
// ]

// const total = cart.reduce((acc, product) => acc + product.price, 0)
// console.log(total)

/**
 * ARRAY CHALLANGES
 */
const people = [
  { firstName: "Joe", lastName: "Terlecki", age: 33 },
  { firstName: "becky", lastName: "Terlecki", age: 38 },
  { firstName: "lyra", lastName: "Terlecki", age: 2 },
  { firstName: "luna", lastName: "Terlecki", age: 4 },
  { firstName: "kitty", lastName: "Terlecki", age: 73 },
]

const youngPeople = people
  .filter((person) => person.age <= 20)
  .map((person) => ({ name: person.firstName + " " + person.lastName }))
console.log(youngPeople)
const nums = [2, -30, 50, 20, -12, -9, 7]
const positiveSum = nums
  .filter((number) => number > 0)
  .reduce((acc, curr) => acc + curr, 0)

console.log(positiveSum)

const words = ["coder", "programmer", "developer"]
const capitalWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1)
})

console.log(capitalWords)
