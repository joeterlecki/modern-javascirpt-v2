/**
 * ARRAYS
 */
// let index
// // array litteral
// const numbers = [12, 23, 45, 66, 77]
// console.log(numbers)

// // array constructor
// const fruits = new Array("apples", "organges", "peaches")

// console.log(fruits)

// index = numbers[0]

// index = `My favorite number is ${numbers[1]}`
// console.log(index)

// const mixedArr = [1, 2, "3", "4", true]
// console.log(mixedArr)

// console.log(mixedArr.length)

// fruits[1] = "mango"
// console.log(fruits)

// fruits[fruits.length] = "berries"
// console.log(fruits)
// // the length of a array is always one more than the last index value becayse undex values are 0 based

/**
 * Array methods
 */

// let output
// const arr = [34, 32, 56, 78, 99]

// arr.push(100) // add to the end
// console.log(arr)

// arr.pop()
// console.log(arr) // remove last item

// arr.unshift(80) // add to the beginning
// console.log(arr)
// arr.shift()
// console.log(arr) // remove from beginner

// // arr.reverse()
// console.log(arr)

// output = arr.includes(32)
// console.log(output) // does value exist in the array | true
// output = arr.includes("32")
// console.log(output) // returns false

// output = arr.indexOf(78)
// console.log(output)

// output = arr.indexOf(500)
// console.log(output) // if the value doesnt exist it will return -1

// output = arr.slice(1, 3) // get items from after index 1 to index 3 | returns 32,56
// output = arr.slice(0, 3) // get items from after 0 to index 3 | 34,32,56

// // output = arr.splice(1, 4) // splice edits the array and takes those items out and stores them as a new variable and leaving the left overs to the original array
// // 32,56,78,99 | 34

// // output = arr.splice(3, 1) // remove single element from array

// output = arr.slice(1, 3).reverse().toString().charAt(0)

// console.log(output, arr)

/**
 * NESTING, CONCAT AND SPREAD
 */
// let output
// const fruits = ["mangos", "apples", "pears"]
// const berries = ["blueberry", "raspberry", "strwaberry"]

// // fruits.push(berries)
// console.log(fruits)

// // output = fruits[3][1]

// const allFruits = [fruits, berries]
// output = allFruits
// output = allFruits[1][0]

// // concat array
// output = fruits.concat(berries) // creates a big array with everything from both fruits and berries

// // spread operator to combine them
// output = [...fruits, ...berries]
// console.log(output)

// // flatten array
// const arr = [1, 2, 3, [4, 5], 6, [7, 8, 9]] // take all array items and flattens them to one array

// console.log(arr)
// output = arr.flat()
// console.log(output)

// /**
//  * STATIC METHOD ON ARRAY OBJECT
//  *
//  */

// output = Array.isArray(arr)

// output = Array.from("12345") // give the string back as an array of 12345

// const a = 1
// const b = 2
// const c = 3
// output = Array.of(a, b, c)

// console.log(output)

/**
 * ARRAY CHALLANGES
 */

// const arr = [1, 2, 3, 4, 5]
// arr.push(6)
// arr.unshift(0)
// arr.reverse()
// console.log(arr)

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [5, 6, 7, 8, 9, 10]

// // arr1.pop()

// // let arr3 = [...arr1, ...arr2]
// // const arr3 = arr1.slice(0, 4).concat(arr2)
// const arr3 = [...arr1, ...arr2]
// arr3.splice(4, 1)
// console.log(arr3)

/**
 * OBJECT LITTERALS
 */
// let output
// const person = {
//   fullName: "Joe Terlecki",
//   age: 33,
//   isAdmin: true,
//   address: {
//     street: "123 Peebles",
//     city: "PGH",
//     state: "PA",
//   },
//   hobbies: ["pizza", "mtb"],
// }

// output = person.fullName
// output = person["age"]
// output = person.address.state
// output = person.hobbies[1]

// person.age = 39
// person.isAdmin = false

// delete person.age

// person.greet = function () {
//   console.log(`Hello my name is ${this.fullName}`)
// }

// person.greet()
// person.isMarried = true

// output = person

// console.log(output)

/**
 * Object spread operator and methods
 */

// let x
// // const todo = {}
// const todo = new Object()

// todo.id = 1
// todo.name = "taxes"
// todo.compled = true

// x = todo

// const person = {
//   address: {
//     coords: {
//       lat: 42.3333,
//       lng: -89.333,
//     },
//   },
// }

// x = person.address.coords.lat

// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }

// const obj3 = { ...obj1, ...obj2 } // Newer better version than Assign
// // const obj4 = Object.assign({}, obj1, obj2)

// const todoList = [
//   { id: 1, taksName: "taxes" },
//   { id: 2, taksName: "groceries" },
//   { id: 3, taksName: "trash" },
// ]

// x = todoList[1].taksName
// x = Object.keys(todo)

// // get length of the object kyes
// x = Object.keys(todo).length

// // obejct values length
// x = Object.values(todo).length
// x = Object.entries(todo)

// x = todo.hasOwnProperty("name")

// console.log(x)

/**
 * Destructuing and Naming
 */

const firstName = "joe"
const lastName = "terlecki"
const age = 33

// if key is the same as a variable name to referecne the value, you dont need to do this
// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// }
// DO THIS!!!!
const person = {
  firstName,
  lastName,
  age,
}

console.log(person.age)

// destructuring
let output
const todo = {
  id: 1,
  title: "groceries",
  user: {
    fullName: "Joe Terlecki",
  },
}

// const id = todo.id // dont do this becasue we can destrucutre or use
// DO THIS
// pulls them out and saves as the variable to be used
const {
  id: todoID, //rename the id to todoID
  title,
  user: { fullName },
} = todo
console.log(todoID, title, fullName)

const nums = [1, 2, 44, 55, 66, 66, 77, 88]
// we can also destructure arrays
// const [first, second] = nums // first two values of the array
// console.log(first, second) // first two values of the array

// rest operator
const [first, second, ...theRest] = nums
console.log(first, second, theRest)
// rest operator puts the rest of the values into another array
