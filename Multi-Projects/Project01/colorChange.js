let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    document.body.style.background = box.innerHTML;
    // box.innerHTML = "Hee";
    console.log(box.innerHTML);
  });
});
