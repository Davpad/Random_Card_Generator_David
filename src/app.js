/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let generateSuit = () => {
    let suits = ["♦", "♥", "♠", "♣"];

    let suitChoice = Math.floor(Math.random() * suits.length);

    return suits[suitChoice];
  };

  let generateNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let numberChoice = Math.floor(Math.random() * numbers.length);

    return numbers[numberChoice];
  };

  const suit = generateSuit();
  const number = generateNumber();

  document.getElementById("number").innerHTML = number;
  document.getElementById("suit").innerHTML = suit;
  document.getElementById("suit2").innerHTML = suit;

  if (
    document.getElementById("suit").textContent === "♦" ||
    document.getElementById("suit").textContent === "♥"
  ) {
    document.getElementById("number").style.color = "red";
    document.getElementById("suit").style.color = "red";
    document.getElementById("suit2").style.color = "red";
  }
};
