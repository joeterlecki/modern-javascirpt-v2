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
// const listItems: NodeListOf<HTMLElement> = document.querySelectorAll(".item")
// // listItems.forEach((item, index) => {
// //   item.style.color = "red"
// //   if (index === 1) {
// //     item.remove()
// //   }
// //   if (index === 0) {
// //     item.innerHTML = `Oranges
// //     <button class="remove-item btn-link text-red">
// //     <i class="fa-solid fa-xmark"></i>
// //     </button>`
// //   }
// // })
// const listItems2 = document.getElementsByClassName("item")
// console.log(listItems2[2].textContent)
// const listItemsArray = Array.from(listItems2)
// console.log(listItemsArray[1].textContent)
/**
 * TRAVERSING ELEMENTS
 */
//get child elements
// let output
// const parent = document.querySelector(".parent")
// output = parent.children
// output = parent.children[1].innerText
// output = parent.children[1].className
// output = parent.children[1].nodeName
// parent.children[1].textContent = "CHILD TWO"
// parent.children[1].style.color = "red"
// parent.firstElementChild.textContent = "CHILD ONE"
// parent.lastElementChild.textContent = "CHILD THREE"
// // get parent element from the child
// const child = document.querySelector(".child")
// output = child.parentElement
// child.parentElement.style.border = "1px solid #ccc"
// child.parentElement.style.padding = "10px"
// // sibline elements
// const secondItem = document.querySelector(".child:nth-child(2)")
// output = secondItem
// output = secondItem.nextElementSibling
// secondItem.nextElementSibling.style.color = "green"
// secondItem.previousElementSibling.style.color = "orange"
// console.log(output)
/**
 * DOM NODES
 */
/**
 * CREATING ELEMENTS
 */
// const div: HTMLDivElement = document.createElement("div")
// div.className = "created-div"
// div.id = "created-dev-id"
// div.setAttribute("title", "My Elements")
// const text: Text = document.createTextNode("HELLO WORLD")
// div.appendChild(text)
// document.body.appendChild(div)
// document.querySelector("ul")?.appendChild(div)
// console.log(div)
// quick and dirty
// function createListItem(item: string): void {
//   const li = document.createElement("li")
//   li.innerHTML = `${item}
//   <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>`
//   document.querySelector(".items")?.appendChild(li)
// }
// function createNewItem(item: string): void {
//   const li: HTMLLIElement = document.createElement("li")
//   li.appendChild(document.createTextNode(item))
//   const button = createButton("remove-item btn-link text-red")
//   li.appendChild(button)
//   document.querySelector(".items")?.appendChild(li)
// }
// function createButton(classes: string): HTMLButtonElement {
//   const button: HTMLButtonElement = document.createElement("button")
//   button.className = classes
//   const icon = createIcon("fa-solid fa-xmark")
//   button.appendChild(icon)
//   return button
// }
// function createIcon(classes: string): HTMLElement {
//   const icon: HTMLElement = document.createElement("i")
//   icon.className = classes
//   return icon
// }
// createNewItem("Cheese")
// createNewItem("Pizza")
/**
 * Insert elements text and html
 */
/**
 * <!-- beforebegin -->
 * <p>
 *   <!-- afterbegin -->
 *   foo
 *   <!-- beforeend -->
 * </p>
 * <!-- afterend -->
 */
// function insertElement(): void {
//   const filter = document.querySelector(".filter") as HTMLElement
//   const h1: HTMLHeadingElement = document.createElement("h1")
//   h1.textContent = "insertAdjacentElement"
//   filter?.insertAdjacentElement("beforebegin", h1)
// }
// function insertText(): void {
//   const item = document.querySelector("li:first-child") as HTMLElement
//   item.insertAdjacentText("beforebegin", "insertAdjacentText")
// }
// function insertHTML(): void {
//   const clearBTN = document.querySelector("#clear") as HTMLElement
//   clearBTN.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>")
// }
// function insertBeforeElement() {
//   const ul = document.querySelector("ul")
//   const li = document.createElement("li")
//   li.textContent = "insertBefore"
//   const thirdItem = document.querySelector("li:nth-child(3)")
//   ul?.insertBefore(li, thirdItem)
// }
// function insertAfterElement(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)
// }
// const li = document.createElement("li")
// li.textContent = "Insert After"
// const firstItem = document.querySelector("li:first-child")
// // insertElement()
// // insertText()
// // insertHTML()
// // insertBeforeElement()
// insertAfterElement(li, firstItem)
/**
 * REPLACING ELEMENTS IN THE DOM
 */
// function replaceFirst() {
//   const firstItem = document.querySelector("li:first-child")
//   const li = document.createElement("li")
//   li.textContent = "Grapes Replaced"
//   firstItem?.replaceWith(li)
// }
// function replaceSecondItem() {
//   const secondItem = document.querySelector("li:nth-child(2)")
//   secondItem!.outerHTML = "<li>Replaced Second</li>"
// }
// function replaceAllItems() {
//   const allItems = document.querySelectorAll("li")
//   // allItems.forEach((item, index) => {
//   //   // item.outerHTML = "<li>Replace ALL</li>"
//   //   if (index === 1) {
//   //     item.innerHTML = "INDEX 1"
//   //   } else {
//   //     item.innerHTML = "Replace ALL Inner HTML"
//   //   }
//   // })
//   allItems.forEach(
//     (item, index) =>
//       (item.innerHTML = index === 1 ? "SECOND ITEM" : "REPLEACED AGAIN")
//   )
// }
// function replaceChildHeading() {
//   const header = document.querySelector("header")
//   const h1 = document.querySelector("header h1")
//   const h2 = document.createElement("h2")
//   h2.id = "app-title"
//   h2.textContent = "shopping list"
//   header?.replaceChild(h2, h1)
// }
// replaceFirst()
// replaceSecondItem()
// replaceAllItems()
// replaceChildHeading()
/**
 * REMOVING ELEMENTS
 */
// remove
function removeClearButton() {
    document.querySelector("#clear")?.remove();
}
function removeFirst() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");
    ul.removeChild(li);
}
function removeItem(itemIndex) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemIndex})`);
    ul.removeChild(li);
}
function removeIem2(itemIndex) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemIndex];
    ul?.removeChild(li);
}
function removeItem3(itemIndex) {
    const li = document.querySelectorAll("li");
    li[itemIndex - 1].remove();
}
const removeItem4 = (itemIndex) => document.querySelectorAll("li")[itemIndex - 1].remove();
removeClearButton();
// removeFirst()
// removeItem(3)
// removeIem2(2)
// removeItem3(2)
removeItem4(3);
