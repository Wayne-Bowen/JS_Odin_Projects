// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
// btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
