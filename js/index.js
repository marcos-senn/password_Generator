const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
 "-",
 ".",
 ",",
 "!",
 "?",
 "@",
 "#",
 "$",
 "%",
 "&",
 "*",
 "+",
 "=",
 "/",
 ";",
 "(",
 ")",
 "[",
 "]",
 "{",
 "}",
 ":",
 "<",
 ">",
 "|",
 "_",
 "~",
 "`",
 "^",
 '"',
];
const letters = [
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z",
];

const mayusLetters = [...letters].map((letter) => letter.toUpperCase());

let password = "";
let passwordLength;
let base = [];

let parametros = {
 numberCheck: false,
 mayusCheck: false,
 symbolCheck: false,
};

const random = () => {
 password = "";
 for (let i = 0; i < passwordLength; i++) {
  password += base[Math.floor(Math.random() * base.length)];
 }
};

const generatePassword = ({ numberCheck, mayusCheck, symbolCheck }) => {

 switch (true) {
  case numberCheck && mayusCheck && symbolCheck:
   base = [...letters, ...numbers, ...symbols, ...mayusLetters];
   break;

  case numberCheck && symbolCheck:
   base = [...letters, ...numbers, ...symbols];
   break;

  case numberCheck && mayusCheck:
   base = [...letters, ...numbers, ...mayusLetters];
   break;

  case symbolCheck && mayusCheck:
   base = [...letters, ...symbols, ...mayusLetters];
   break;

  case numberCheck && symbolCheck:
   base = [...letters, ...numbers, ...symbols];
   break;

  case mayusCheck:
   base = [...letters, ...mayusLetters];
   break;

  case numberCheck:
   base = [...letters, ...numbers];
   break;

  case symbolCheck:
   base = [...letters, ...symbols];
   break;

  default:
   base = [...letters];
 }

 random();
 showpass.innerText = password;
};

// ---------------- DOM -----------------------------

const button = document.getElementById("generatorButton");
button.addEventListener("click", () => {
  console.log("Botón Generar clickeado"),
 generatePassword(parametros);

});

const showpass = document.getElementById("showpass");
const lengthSelect = document.getElementById("length_options");
lengthSelect.addEventListener("change", () => {
 passwordLength = lengthSelect.value;
});

const handleCheck = (event) => {
 if (event.target.checked) {
  parametros[event.target.name] = event.target.checked;
 } else {
  parametros[event.target.name] = false;
 }
};

const numberCheck = document.getElementById("number_check");
const mayusCheck = document.getElementById("mayus_check");
const symbolCheck = document.getElementById("symbol_check");

numberCheck.addEventListener("change", handleCheck);
mayusCheck.addEventListener("change", handleCheck);
symbolCheck.addEventListener("change", handleCheck);
