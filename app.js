// About Us slider ::
let images1 = ["about1.jpg", "about2.jpg", "about3.jpg", "about4.jpg"];
let images2 = ["about5.jpg", "about6.jpg", "about7.jpg", "about8.jpg"];

let leftButtun = document.querySelector(".fa-circle-chevron-left");

let rightButtun = document.querySelector(".fa-circle-chevron-right");

let listPic = document.querySelectorAll(".about-pic");

for (let i = 0; i < listPic.length; i++) {
  listPic[i].src = images1[i];
}

leftButtun.onclick = function sliderLeft() {
  for (let i = 0; i < listPic.length; i++) {
    if ((listPic.src = images2)) {
      listPic[i].src = images1[i];
    }
    listPic[i].src = images2[i];
  }
};
rightButtun.onclick = function sliderRight() {
  for (let i = 0; i < listPic.length; i++) {
    listPic[i].src = images1[i];
  }
};

// Menu Selecting

let menuButton = document.querySelectorAll(".menu-span");
let menuPic = document.querySelectorAll(".menu-pic");
let appetizerSpan = document.getElementById("Appetizers");
let appetizerImages = [
  "appetizer1.jpg",
  "appetizer2.jpg",
  "appetizer3.jpg",
  "appetizer4.jpg",
];
let pastaImages = ["pasta1.jpg", "pasta2.jpg", "pasta3.jpg", "pasta4.jpg"];
let pizzaImages = ["pizza1.jpg", "pizza2.jpg", "pizza3.jpg", "pizza4.jpg"];
let SaladImages = ["salad1.jpg", "salad2.jpg", "salad3.jpg", "salad4.jpg"];
let SoupImages = ["soup1.jpg", "soup2.jpg", "soup3.jpg", "soup4.jpg"];
let DessertImages = [
  "dessert1.jpg",
  "dessert2.jpg",
  "dessert3.jpg",
  "dessert4.jpg",
];
let foodImages = [
  appetizerImages,
  pastaImages,
  pizzaImages,
  SaladImages,
  SoupImages,
  DessertImages,
];
for (let i = 0; i < menuPic.length; i++) {
  menuPic[i].src = appetizerImages[i];
}
for (let i = 0; i < menuButton.length; i++) {
  menuButton[i].onclick = function imageChange() {
    for (let j = 0; j < menuPic.length; j++) {
      menuPic[j].src = foodImages[i][j];
    }
    appetizerSpan.style.backgroundColor = "#CFD2C6";
  };
}
