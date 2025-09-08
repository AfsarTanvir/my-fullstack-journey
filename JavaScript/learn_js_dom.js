/*
Basic DOM Concepts
The DOM is a tree-like structure that represents your HTML page.
JavaScript can select, modify, add, remove, and style these nodes.
*/

let h1 = document.getElementById("heading1");
h1.innerText = "This is the power of JS.";

let p1 = document.querySelector(".para"); // selects first .para
let pAll = document.querySelectorAll(".para"); // selects all .para
p1.innerText = "this is strong";

pAll.forEach((p, i) => {
  p.innerText = `Paragraph ${i + 1} updated by JS!`;
});

/*
innerText → only visible text.
innerHTML → can include HTML tags.
textContent → all text (including hidden).
*/

// Adding & Removing Elements
let ul = document.getElementById("list");

// Add new element
let newItem = document.createElement("li");
newItem.innerText = "Item 4";
ul.appendChild(newItem);

// Remove element
ul.removeChild(ul.firstElementChild); // removes Item 1
// ul.children[2].remove();
// ul.removeChild(ul.children[2]);

/*
Event listeners
*/
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Button Clicked!");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    p1.innerHTML = "<b>Up arrow is pressed</b>";
    btn.classList.add("highlight");
  } else if (event.key === "ArrowDown") {
    p1.innerHTML = "<b>Down arrow is pressed</b>";
    btn.classList.remove("highlight");
    document.body.classList.toggle("background");
  }
});

btn.addEventListener("mouseenter", () => {
  btn.style.background = "orange";
});

btn.addEventListener("mouseleave", () => {
  btn.style.background = "";
});

/*
Styling with JavaScript
*/
