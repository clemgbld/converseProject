"use strict";
const black = "https://i.ibb.co/Jr7Wh1d/challenges.jpg";
const blue =
  "https://i.etsystatic.com/6735949/r/il/bbf165/2403085941/il_570xN.2403085941_6ozd.jpg";
const red =
  "https://i.pinimg.com/736x/b2/90/a1/b290a167c188bee0d4de95f8989a6b84.jpg";
const green =
  "https://spot.flashmode.tn/wp-content/uploads/2020/12/22-converse-aesthetic-Converse-Chuck-Taylor-All-Star-Hi.jpg";
const yellow =
  "https://i.pinimg.com/originals/c4/ff/3a/c4ff3afb66ebed677c9d709755dc25e8.jpg";
const brown =
  "https://media.endclothing.com/media/f_auto,w_600,h_600/prodmedia/media/catalog/product/1/9/19-01-2021_MO_170551C_m6_1.jpg";

let image = document.getElementById("change");

const colorContainer = document.querySelector(".color-container");
const blueSquare = document.querySelector(".blue");
const blackSquare = document.querySelector(".black");
const redSquare = document.querySelector(".red");
const greenSquare = document.querySelector(".green");
const yellowSquare = document.querySelector(".yellow");
const brownSquare = document.querySelector(".brown");

const changeImage = function (color) {
  return image.setAttribute("src", color);
};

colorContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".color");
  if (!clicked) return;
  console.log(clicked);
  if (clicked === blackSquare) changeImage(black);
  if (clicked === blueSquare) changeImage(blue);
  if (clicked === redSquare) changeImage(red);
  if (clicked === yellowSquare) changeImage(yellow);
  if (clicked === greenSquare) changeImage(green);
  if (clicked === brownSquare) changeImage(brown);
});
