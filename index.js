//This is the concept of how the rand num generator works

let x; //defining the variable

x = Math.floor(Math.random() * 6) + 1;
//Math.floor: round down the decimal generated
//Math.random: generates a random number btw 0 and 1 "mostly decimal"
//Math.random * 6: increases the range of numbers from 0 - 1 to  0 - 6
 
console.log(x);