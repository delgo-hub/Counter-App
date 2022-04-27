"use strict";
//DOM variables
const countEl = document.querySelector(".count");
const btnsEl = document.querySelectorAll(".btn");

//variables
let count = 0;

//click event
for (let i = 0; i < btnsEl.length; i++) {
    btnsEl[i].addEventListener("click", () => {
        if (btnsEl[i].textContent === "Decrease" && count !== 0) {
            count--;
            countEl.textContent = count;
        } else if (btnsEl[i].textContent === "Increase") {
            count++;
            countEl.textContent = count;
        } else {
            count = 0;
            countEl.textContent = count;
        }
    });
}
