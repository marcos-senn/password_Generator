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

let passwordLength = 6;
let base = [];
let parametros = {
 simbolos: false,
 numeros: false,
 mayus: false,
};

const random = () => {
 let password = "";
 for (let i = 0; i < passwordLength; i++) {
  password += base[Math.floor(Math.random() * base.length)];
 }
 return password;
};

const generatePassword = ({ simbolos, numeros, mayus }) => {
 switch (true) {
  case simbolos && numeros && mayus:
   base = [...letters, ...numbers, ...symbols, ...mayusLetters];
   break;

  case numeros && simbolos:
   base = [...letters, ...numbers, ...symbols];
   break;

  case numeros && mayus:
   base = [...letters, ...numbers, ...mayusLetters];
   break;

  case simbolos && mayus:
   base = [...letters, ...symbols, ...mayusLetters];
   break;

  case numeros && simbolos:
   base = [...letters, ...numbers, ...symbols];
   break;

  case mayus:
   base = [...letters, ...mayusLetters];
   break;

  case numeros:
   base = [...letters, ...numbers];
   break;

  case simbolos:
   base = [...letters, ...symbols];
   break;

  default:
   base = [...letters];
 }

 return random();
};
