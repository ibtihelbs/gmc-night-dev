const card = document.querySelector("#card");
const button = document.querySelector("button");
const ps = document.querySelectorAll("p");
console.log(card, button, ps);
ps[1].innerHTML = "hello this our first dom manipulation";
ps[1].style.backgroundColor = "orange";
function randomColor() {
  return "#" + Math.trunc(Math.random() * 1000000);
}
button.addEventListener("click", function () {
  let bg = randomColor();
  //alert(bg);
  card.style.backgroundColor = bg;
});
//function random to
// 1- generate a number between 0 and 999999
// add '#' + '856314'
// '#856314'
