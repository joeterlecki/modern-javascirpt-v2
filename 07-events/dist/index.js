"use strict";
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
const logo = document.querySelector("img");
const onClick = () => console.log("click event");
const onDoubleClick = () => console.log("double click event");
// event listeners
logo?.addEventListener("click", onClick);
logo?.addEventListener("dblclick", onDoubleClick);
