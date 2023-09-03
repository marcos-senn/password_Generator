const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ['-','.',',','!','?','@','#','$','%','&','*','+','=','/',';','(',')','[',']','{','}',':','<','>','|','_','~','`','^','"']
const letters =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let passwordLength = 18
let base = [];
let password = ''


const generatePassword = (letras=false, simbolos=false, numeros= false) => {
    if(letras&&simbolos&&numeros){
     base = [...numbers, ...symbols, ...letters]
     
     for (let i = 0; i <= passwordLength; i++) {
        password = password + base[Math.floor(Math.random() * base.length)]
     }
    }

    else if(numeros&&simbolos){
        base = [...numbers, ...symbols]
        
        for (let i = 0; i <= passwordLength; i++) {
           password = password + base[Math.floor(Math.random() * base.length)]
        }
       }

     else  if(numeros&&letras){
        base = [...numbers, ...letters]
        
        for (let i = 0; i <= passwordLength; i++) {
           password = password + base[Math.floor(Math.random() * base.length)]
        }
       }

    else  if(simbolos&&letras){
        base = [...symbols, ...letters]
        
        for (let i = 0; i <= passwordLength; i++) {
           password = password + base[Math.floor(Math.random() * base.length)]
        }
       }

    else{
        base = [...letters]
        for (let i = 0; i <= passwordLength; i++) {
            password = password + base[Math.floor(Math.random() * base.length)]
         }
    }


    console.log(password)
}



generatePassword(letras=false,simbolos=false,numeros=false)