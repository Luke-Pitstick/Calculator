const math = require("mathjs");

function roundNumber(num, scale) {
  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(
      Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) +
      "e-" +
      scale
    );
  }
}

const test = "";
const clear = document.querySelector("#C");
const plusminus = document.querySelector("#plusminus");
const back = document.querySelector("#back");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const subtract = document.querySelector("#subtract");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const add = document.querySelector("#add");
const zero = document.querySelector("#zero");
const period = document.querySelector("#period");
const equal = document.querySelector("#equal");
const output = document.querySelector("#in");
let equation = "";
let out = "";
let switcher = 0;
let buttonCount = 0;

const numbers = [
  seven,
  eight,
  nine,
  four,
  five,
  six,
  one,
  two,
  three,
  zero,
  period,
];

const symbols = [add, subtract, multiply, divide];

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    let char = btn.textContent;

    if (switcher === 1) {
      out = "";
      equation = "";
      out += char;
      switcher = 0;
    } else {
      out += char;
    }

    equation += "" + char;
    output.textContent = out;
  });
});

symbols.forEach((btn) => {
  btn.addEventListener("click", () => {
    out = "";
    equation += btn.textContent;
    output.textContent = btn.textContent;
    switcher = 0;
  });
});

clear.addEventListener("click", () => {
  out = "";
  equation = "";
  output.textContent = "0";
});

equal.addEventListener("click", () => {
  out = "";
  let eq = equation.replace("x", "*");
  let answer = roundNumber(math.evaluate(eq), 4);
  console.log(answer);
  equation = "" + answer;
  console.log(equation);
  output.textContent = "" + answer;
  switcher = 1;
  buttonCount = 0;
});
