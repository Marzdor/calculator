import $ from "jquery";

$(document).ready(() => {
  const buttons = ["CLEAR", "BACK", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
  for (let i = 0; i < buttons.length; i++) {
    let $btn = $("<button>").attr("id", "calculator--" + buttons[i]).addClass("calculator_btn").text(buttons[i]);
    $(".calculator_btnArea").append($btn);
    $($btn).on("click", readButton);
  }
});

function readButton() {
  const btn = $(this).text();
  let displayText = $(".calculator_display").text();

  switch (btn) {
    case "=":
      $(".calculator_display").text(eval(displayText));
      break;
    case "CLEAR":
      $(".calculator_display").empty();
      break;
    case "BACK":
      displayText = displayText.slice(0, -1);
      $(".calculator_display").text(displayText);
      break;
    default:
      displayText += btn;
      $(".calculator_display").text(displayText);
      break;
  }
}