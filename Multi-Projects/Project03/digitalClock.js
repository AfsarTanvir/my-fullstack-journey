let digitalClk = document.querySelector("#clk");

setInterval(function () {
  let ti = new Date().toLocaleTimeString();
  digitalClk.innerHTML = ti;
  digitalClk
}, 1000);
