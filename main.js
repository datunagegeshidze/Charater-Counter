let textarea = document.querySelector(".textarea");

let remaining = document.querySelector(".Remaining span");
let rem = 50;

let words = document.querySelector("#words");
words.addEventListener("input", function () {
  let x = rem - words.value.length;
  remaining.innerHTML = x;
  if (x == 0) {
    remaining.style.color = "red";
  }
});
