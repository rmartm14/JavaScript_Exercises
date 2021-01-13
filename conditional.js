//If a string with 0

if ("0"){ 
    alert("Hello")
}

//The name of js

let userInput = prompt("What is the 'official' name of JavaScript");

let message = (userInput == "ECMAScript") ? "Right!" : "Didnt know? ECMAScript!!";

alert(message);

//Show the sign

let userInputNumber = prompt("Write a number");
let sign = (userInputNumber > 0) ? 1 :
(userInputNumber == 0) ? 0 : -1;

alert(`El signo es: ${sign} .`);

//Rewrite if into ?
let a = 2;
let b = 1;

let result = (a + b > 4) ? "below" : "over";

alert(`El resultado es ${result}.`);

let login = "Director"

let messageLogin = (login = 'Employee') ? "Hello" :
(login = 'Director') ? "Greetings" : 
(login = "") ? "No login" : "";

alert(messageLogin)


