let skill1 = document.getElementById("1");
let skill2 = document.getElementById("2");
let skill3 = document.getElementById("3");

skill1.style.width = "56%";
skill2.style.width = "70%";
skill3.style.width = "90%";

// Burger Menu

let logoText = document.querySelector(".logo-text");
let menu = document.querySelector("#menu");
console.log(menu);

// Function
logoText.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
