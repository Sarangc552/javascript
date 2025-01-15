/*create a game where you start with any random number ask the user to keep 
guessing the game number until the user enters correct value*/

let num = 25;
let usernNum = prompt("Guess the game number:");
while (usernNum != num) {
  usernNum = prompt("you entered wrong number,try again:");
}
console.log("congratulation,you entered the right number");

/*print all even numbers from 0 to 100*/

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log("even numbers are :", num);
  }
}
