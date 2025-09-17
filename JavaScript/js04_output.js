function testOutputs() {
  // 1. innerHTML → includes HTML tags
  document.getElementById("p1").innerHTML = "This is <b>innerHTML</b>";

  // 2. innerText → only plain text (ignores HTML tags)
  document.getElementById("title").innerText =
    "This is innerText <b>ignored</b>";

  // 3. document.write() → writes directly to the page (overwrites if used after load)
  document.write("This is document.write() - it can overwrite the whole page!");

  // 4. alert() → popup box
  alert("This is an alert box!");

  // 5. console.log() → outputs to browser console (F12 > Console tab)
  console.log("This is console.log() output");

  // 6. window.print() → opens print dialog
  // (uncomment if you want to test printing)
  // window.print();
}

// for changing the paragraph
function changePara() {
  document.getElementById("p1").innerHTML = "See it change <b>Paragraph</b>.";
}

// for alert Message
function alertButton() {
  alert("Why did you click me?");
}

// for print the document
function printButton(){
    window.print();
}

// create new paragraph 
function addParagraph(){
    let np = document.createElement("newPara");
    np.innerHTML = "How dare you touch me?";
    document.body.appendChild(np);
}
