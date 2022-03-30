"use strict";
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let big = document.querySelector(".big");
let inform = document.querySelector(".inform");
let second = document.querySelector(".second");

function ekrangaChiqarish(a) {
  let val = input.value;
  let html = `  <div class="second sec${a++} flex">
  <p>${val}</p>
  <button class="delete">Delete</button>
</div>`;
  inform.insertAdjacentHTML("afterend", html);
}

let a = 0;
btn.addEventListener("click", function () {
  a++;
  ekrangaChiqarish(a);
  // console.log(arr);
});

setInterval(function (val) {
  big.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    }
  });
}, 3000);
