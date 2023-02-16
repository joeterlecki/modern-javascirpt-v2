"use strict";
/**
 * INTRO TO THE DOM
 */
// console.dir(window.document)
// console.log(document.body.innerText)
// co
/**
 * ELEMENT PROPS
 */
// let output: any
// // output = document.all
// output = document.documentElement
// output = document.head
// output = document.body
// output = document.head.children
// output = document.doctype
// // output = document.domain // depricated
// output = document.URL
// output = document.forms
// // document.forms[0].id = "some-id"
// const forms = Array.from(document.forms)
// forms.forEach((form) => console.log(form))
// console.log(output as HTMLCollection)
/**
 * SINGLE ELEMENTS
 */
// console.log(document.getElementById("app-title"))
// console.log(document.getElementById("app-title")?.getAttribute("id"))
// // document.getElementById("app-title").id = "new-id"
// // document.getElementById("app-title").title = "shopping-list"
// document.getElementById("app-title")?.setAttribute("class", "title")
// const title = document.getElementById("app-title") as HTMLElement
// console.log(title.textContent)
// title.textContent = "Hello world"
// title.innerText = "Hello world"
// title.innerHTML = "<strong>Shopping List</strong>"
// title.style.color = "blue"
// title.style.backgroundColor = "black"
// console.log(document.querySelector("h1"))
// console.log(document.querySelector("input[type=text"))
// // console.log(document.querySelector("li:nth-child(2)")?.textContent)
// const secondItem: HTMLElement = document.querySelector("li:nth-child(2)")! //not null assertion says trust me its not uindefined
// secondItem.innerText = "Apple Juice"
// secondItem.style.color = "blue"
// const list: HTMLUListElement = document.querySelector("ul")!
// console.log(list)
// const firstItem = list.querySelector("li")!
// firstItem.style.color = "green"
/**
 * MULTIPLE ELEMENTS
 */
const listItems = document.querySelectorAll(".item");
listItems.forEach((item) => console.log(item.innerText));
