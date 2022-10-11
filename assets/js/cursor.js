// Starts //todo: JS for cursor of coffee
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
// Ends //?: JS for cursor of coffee

// Starts //!: JS for cursor for body
let innerCursor = document.querySelector(".inner-cursor");
let grayCursorElements = Array.from(document.querySelectorAll(".gray-cursor"));
// let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  // outerCursor.style.left = `${x}px`;
  // outerCursor.style.left = `${y}px`;
}

let growElements = [
  ...Array.from(document.querySelectorAll("p")),
  ...Array.from(document.querySelectorAll("a")),
  ...Array.from(document.querySelectorAll("h1")),
  ...Array.from(document.querySelectorAll("h2")),
  ...Array.from(document.querySelectorAll("h3")),
  ...Array.from(document.querySelectorAll("h4")),
  ...Array.from(document.querySelectorAll("h5")),
  ...Array.from(document.querySelectorAll("h6")),
  ...Array.from(document.querySelectorAll("h7")),
  ...Array.from(document.querySelectorAll("ul")),
  ...Array.from(document.querySelectorAll("li"))
  // ...Array.from(document.querySelectorAll("svg"))
];

console.log("links");

grayCursorElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    innerCursor.classList.add("grey-grey");
  });
  element.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grey-grey");
  });
});

growElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  element.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});
// Ends //?: JS for cursor for body
