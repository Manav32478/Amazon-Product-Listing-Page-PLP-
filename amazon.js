document.getElementById(cart).ariaValueMax;
clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("cart").innerHTML = localStorage.clickcount;
}
function addItems(){
    localStorage.setItem("mytime", Date.now());
    localStorage.setItem("myname", "John");
    localStorage.setItem("myage", 36);
  }
