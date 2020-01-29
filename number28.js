console.log("This is before the function definition");

function sayYourName(yourName) {
    console.log("Hello " + yourName + ", how are you feeling today?");
    console.log (yourName + " is doing awesome!");
}

console.log("This is after the function definition")
/* The above line of code illustrates that the function doesn't execute
until called below*/

let myName = "Jim";
sayYourName(myName);

/* Expected result: "Hello Jim, how are you feeling today?"
"Jim is doing awesome" */

function weirdAddition (numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    console.log (sum);
}

weirdAddition(2, 4, 6);
// Expected result: 12
