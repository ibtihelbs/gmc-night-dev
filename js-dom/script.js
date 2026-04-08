const card = document.querySelector("#card");
const button = document.querySelector("button");
const ps = document.querySelectorAll("p");
console.log(card, button, ps);
ps[1].innerHTML = "hello this our first dom manipulation";
ps[1].style.backgroundColor = "orange";

button.addEventListener("click", function () {
  button.classList.toggle("orange");
});
