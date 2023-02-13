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
let i = 0
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
do {
  console.log("Number " + i)
  i++
} while (i <= 20)
