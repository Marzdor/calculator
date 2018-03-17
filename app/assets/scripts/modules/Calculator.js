import Calc from "./Calc";
import $ from "jquery";

$(document).ready(() => {
  const buttons = ["CE", "C", "BACK", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];
  for (let i = 0; i < buttons.length; i++) {
    let $btn = $("<button>").attr("id", buttons[i]).addClass("calculator_btn").text(buttons[i]);
    $(".calculator_btnArea").append($btn);
    $($btn).on("click", readButton);
  }
});

function readButton() {
  const btn = $(this).attr("id");
  let displayText = $(".calculator_display").text();
  let total = 0;

  if (/[0-9]/.test(btn)) {
    displayText += btn;
    $(".calculator_display").text(displayText);
  } else {
    switch (btn) {
      case "CE":
      case "C":
        $(".calculator_display").empty();
        break;
      case "BACK":
        displayText = displayText.slice(0, -1);
        $(".calculator_display").text(displayText);
        break;
      case "+":
        total = Calc.add(displayText, total);
        console.log(total);
        $(".calculator_display").empty();
        break;
      case "=":
        $(".calculator_display").text(total);
        total = 0;
        break;
    }
  }
}