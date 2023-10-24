/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["♥", "♠", "♣", "♦"];
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = function() {
  //write your code here
  randomCard();
  setInterval(window.onload, 5000);
};

const randomCard = function() {
  let card = cards[Math.floor(Math.random() * cards.length)];
  let suit = suits[Math.floor(Math.random() * suits.length)];
  document.querySelector("#randomCard").innerHTML = card;
  document.querySelector("#randomSuit").innerHTML = suit;
  document.querySelector("#randomSuitFooter").innerHTML = suit;

  if (suit === "♥" || suit === "♦") {
    document.querySelector("#randomSuit").style.color = "red";
    document.querySelector("#randomSuitFooter").style.color = "red";
  } else {
    document.querySelector("#randomSuit").style.color = "black";
    document.querySelector("#randomSuitFooter").style.color = "black";
  }
};

window.changeDimensions = function changeDimensions() {
  let width = document.querySelector("#cardWidth").value;
  let height = document.querySelector("#cardHeight").value;

  document.querySelector(".card").style.width = width + "px";
  document.querySelector(".card").style.height = height + "px";
};
