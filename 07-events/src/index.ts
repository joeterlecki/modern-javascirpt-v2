// function onClear() {
//   alert("Clear ITEMS")
// }

// const clearBTN: HTMLButtonElement = document.querySelector("#clear")!

// /**
//  * JAVASCRIPT EVENT LISTENER
//  */

// // clearBTN.onclick = function () {
// //   alert("Clear items")
// // }

// // ADD EVENT LISTENER
// // clearBTN.addEventListener("click", onClear)

// // setTimeout(() => clearBTN.removeEventListener("click", onClear), 5000)
// const clearItems: EventListener = (): void => {
//   const itemList: HTMLUListElement = document.querySelector("ul")!

//   // const items = document.querySelectorAll(".item")
//   // items.forEach((item, index) => {
//   //   item.remove()
//   // })

//   // most PERFORMENT WAY
//   while (itemList?.firstChild) {
//     itemList.removeChild(itemList.firstChild)
//   }
// }

// clearBTN.addEventListener("click", clearItems)

/**
 * MOUSE EVENTS
 */

// const logo = document.querySelector("img")

// const onClick = (): void => console.log("click event")
// const onDoubleClick = (): void => {
//   if (document.body.style.backgroundColor !== "blue") {
//     document.body.style.backgroundColor = "blue"
//     document.body.style.color = "white"
//   } else {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
//   }
// }

// const onRightClick = (): void => console.log("right click event")
// const onMouseDown = (): void => console.log("mouse down event")
// const onMouseUp = (): void => console.log("mouse up event")
// const onMouseWheel = (): void => console.log("mouse wheel event")
// const onMouseOver = (): void => console.log("mouse over event")
// const onMouseOut = (): void => console.log("mouse out event")
// const onDragStart = (): void => console.log("mouse drag start event")
// const onDrag = (): void => console.log("mouse drag event")
// const onDragEnd = (): void => console.log("mouse drag end event")

// // event listeners
// logo?.addEventListener("click", onClick)
// logo?.addEventListener("dblclick", onDoubleClick)
// logo?.addEventListener("contextmenu", onRightClick)
// logo?.addEventListener("mousedown", onMouseDown)
// logo?.addEventListener("mouseup", onMouseUp)
// logo?.addEventListener("wheel", onMouseWheel)
// logo?.addEventListener("mouseover", onMouseOver)
// logo?.addEventListener("mouseout", onMouseOut)
// logo?.addEventListener("dragstart", onDragStart)
// logo?.addEventListener("drag", onDrag)

/**
 * EVENT OBJECT
 */

// const logo = document.querySelector("img")

// logo?.addEventListener("click", function (e) {
//   // console.log(e.target)
//   // console.log(e.currentTarget)
//   // e.target!.style.backgroundColor = "black"
//   // console.log(e.type)
//   // console.log(e.clientX)
//   // console.log(e.clientY)
//   // console.log(e.offsetX)
//   // console.log(e.offsetY)
//   // console.log(e.pageX)
//   // console.log(e.pageY)
//   console.log(e.screenX)
//   console.log(e.screenY)
// })

// // document.body.addEventListener("click", function (e) {
// //   console.log(e.target)
// //   console.log(e.currentTarget)
// // })

// // stops the link from sending us to another page
// // common if you have a form that you dont want to submit to the page itself
// document.querySelector("a")?.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log("LINK WAS CLICKED")
// })

// function onDrag(e: any) {
//   document.querySelector("h1")!.textContent = `X ${e.clientX} ${e.clientY}`
// }

// logo?.addEventListener("drag", onDrag)

/**
 * KEYBOARD EVENTS
 */

// const itemInput = document.getElementById("item-input")
// const onKeyPress = (e) => {
//   console.log("keypress")
// }
// const onKeyUp = (e) => {
//   console.log("keyup")
// }
// const onKeyDown = (e) => {
//   console.log(e.key)
//   if (e.key === "Enter") {
//     // an alert is a blocking event
//     alert("YOU PRESSED ENTER")
//     // e.preventDefault()
//   }

//   console.log(e.code)
// }

// // itemInput?.addEventListener("keypress", onKeyPress)
// // itemInput?.addEventListener("keyup", onKeyUp)
// itemInput?.addEventListener("keydown", onKeyDown)

/**
 * INPUT EVENTS
 */

// const itemInput = document.getElementById("item-input")
// const priorityInput = document.getElementById("priority-input")
// const checkbox = document.getElementById("checkbox")
// const heading = document.querySelector("h1")

// function onInput(e: any) {
//   heading!.textContent = e.target.value
// }

// function onChecked(e: any) {
//   console.log(e.target.checked)
//   const isChecked = e.target.checked
//   heading!.textContent = isChecked ? "Chekeced" : "NOT CHECKED"
// }

// function onFocus() {
//   // use this if you want a specific outline or somethinglike that
//   itemInput!.style.outlineStyle = "solid"
//   itemInput!.style.outlineWidth = "1px"
//   itemInput!.style.outlineColor = "green"
//   console.log("INPUT IS FOCUSES")
// }

// function onBlur() {
//   console.log("INPUT IS NOT FOCUSED")
//   itemInput!.style.outlineStyle = "none"
// }

// itemInput?.addEventListener("input", onInput)
// // can use change or input for drop down lists
// priorityInput?.addEventListener("change", onInput)
// checkbox?.addEventListener("input", onChecked)
// itemInput?.addEventListener("focus", onFocus)
// itemInput?.addEventListener("blur", onBlur)

/**
 * FORM SUBMISSION
 */

// const form = document.querySelector("#item-form")
// form?.addEventListener("submit", (e: Event): void => {
//   e.preventDefault()
//   const item = document.getElementById("item-input") as HTMLInputElement
//   const priority = document.querySelector("#priority-input") as HTMLInputElement

//   if (item.value === "" || priority.value === "0") {
//     alert("PLEASE ENTER FORM")
//     return
//   }
// })

// form?.addEventListener("submit", (e: Event): void => {
//   e.preventDefault()
//   const formData = new FormData(<HTMLFormElement>form)
//   // item is the name of the form field
//   // const item = formData.get("item")
//   // const priority = formData.get("priority")

//   // returns iterator
//   const entries = formData.entries()
//   console.log(entries)

//   for (let entry of entries) {
//     // reutrns name and vlaue
//     // console.log(entry)
//     console.log(entry[1])
//   }

//   // console.log(item, priority)
// })

/**
 * EVENT BUBBLING
 *
 */

// const submitBtn = document.querySelector("form button")
// const div = document.querySelector("form div:nth-child(2)")
// const form = document.querySelector("form")

// submitBtn?.addEventListener("click", (e: Event) => {
//   alert("CLICKED BUTTON")
//   e.stopPropagation()
// })
// div?.addEventListener("click", () => {
//   alert("DIV IS CLICKED")
// })

// form?.addEventListener("click", () => {
//   alert("FORM WAS CLICKED")
// })

// document.body.addEventListener("click", () => {
//   alert("BODY WAS CLICKED")
// })

/**
 * EVENT DELEGATION
 */

const listItems = document.querySelectorAll("li")
const list = document.querySelector("ul")

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove()
//   })
// })

list?.addEventListener("click", (e: Event) => {
  const element = e.target as HTMLElement
  if (element.tagName === "LI") {
    element.remove()
  }
})

list?.addEventListener("mouseover", (e: Event) => {
  const element = e.target as HTMLElement
  if (element.tagName === "LI") {
    element.style.color = "red"
  }
})
