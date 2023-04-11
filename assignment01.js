// Assignmnet 01
// 1st Task
// 1. Write a JavaScript program that accepts two numbers in two prompts and
//    displays the larger one in the console

console.log("Welcome to Number Comparison Program");
let userNum1 = +prompt("Please Enter any number");
let userNum2 = +prompt("Please again Enter any number");
if(userNum1 > userNum2)
{
console.log(userNum1 + " is larger number");
}
else if (userNum1 < userNum2) 
{
    console.log(userNum2 + " is larger number");
}
else {
    console.log("Numbers are equal");
}

// 2nd Task
//2.Write a JavaScript conditional statement to find the sign of a number. Display
//an alert box with the specified sign.
console.log("Welcome to Sign Detector Program");
let userNumSign = +prompt("Please Enter any number");

if(userNumSign > 0)
{
alert("The sign is + ")
}
else if (userNumSign < 0) 
{
    alert("The sign is - ")
}
else{alert("You entered zero which is neither + nor - ")}

//3rd Task
// 3. Write a JavaScript program that accepts five numbers in five prompts and
//displays the larger one in the console.
console.log("Welcome to Number comparison Program upto 5 user inputs")
let num1 = prompt("Enter any number between 1-9:");
let num2 = prompt("Enter any number between 1-9:");
let num3 = prompt("Enter any number between 1-9:");
let num4 = prompt("Enter any number between 1-9:");
let num5 = prompt("Enter any number between 1-9:");

let largest = num1; // Assume the first number is the largest initially

if (num2 > largest) {
  largest = num2;
}

else if (num3 > largest) {
  largest = num3;
}

else if (num4 > largest) {
  largest = num4;
}

else if (num5 > largest) {
  largest = num5;
}

console.log("The largest number is: " + largest);

//4th Task
//4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//will check if the current number is odd or even, and display a message to the screen.

for(let i=0; i<=15; i++)
{
    if (i%2==0)
    {
        console.log(i + " is Even");
    }
    else {
        console.log(i + " is Odd");
    }
}

//5th Task
//5. Write a JavaScript program which computes the average marks of the
//following students Then, this average is used to determine the corresponding grade.

let userMarks = +prompt("Please enter your total marks to know your grade:");

if(userMarks>90)
{
    console.log("Congratulations! you have achieved A Grade")
}
else if (userMarks>80)
{
    console.log("Congratulations! you have achieved B Grade")
}
else if (userMarks>70)
{
    console.log("Congratulations! you have achieved C Grade")
}
else if (userMarks>60)
{
    console.log("You have achieved D Grade and need to improve your Grades next time")
}
else{
    console.log("Very Poor! You have achieved F Grade and need to improve your Grades next time")
}

//6th Task
//6. Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five
//print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let int=1; int<=100; int++)
{
    if (int % 3 === 0 && int % 5 === 0) {
        console.log("FizzBuzz");
      } else if (int % 3 === 0) {
        console.log("Fizz");
      } else if (int % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(int);
      }
    }


//7th Task
//7. Write a JavaScript program to construct the following pattern, using a nested for loop.

for (let j = 1; j <= 5; j++) {
    let row = "";
    for (let k = 1; k <= j; k++) {
      row += "* ";
    }
    console.log(row);
  }

// End Assignment