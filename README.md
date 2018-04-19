# JS Iteration Basics

## The Assignment

Write functions for each `ex-«XX».js` exercise question so that the `console.assert(...)` declarations evaluate to true.


### Setup
```sh
# (1) Go to your  muktek/assignments directory and create the `js-iteration-basics` folder for this assignment
cd ~/Documents/muktek/assignments
mkdir js-types-variables-functions
cd js-types-variables-functions


# (2) Download the assignment-files with curl from the assignment repo and unzip
curl https://raw.githubusercontent.com/muktek/assignment--js-types-variables-functions/master/assignment-files.zip > assignment-files.zip

unzip assignment-files
```

### Instructions

The goal of these exercises is to write the logic in the function to solve a problem.   The statements/declarations in the `console.assert(...)` describe the expected output from the function *when provided with a given input* and should evaluate to true if you have written the function correctly.

Here is how you will answer each exercise:

(1) Read the problem

(2) Look at the expected output
- you instructors have written these `console.assert()` statements to ensure that you have written the exercise function correctly

(3) Write the function and the logic

```js
// (1) ++ Read the Problem
/**
 * (DEMO) addMoreEnthusiam()
 * ------------------------------------------------------
 * Write a function called `addMoreEnthusiam` that takes a string as
 * input and appends three exclamation marks to the end of the string.
 *
 **/


// (3) ++ Write the function and the logic (You will write this part...)
function addMoreEnthusiasm(inputTxt){
	// ++ ...and your code goes here
	var inputWithEnthusiasm = inputTxt + "!!!"
   return inputWithEnthusiasm
	 // ++ Remember, you must return a value. Nice!
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

// (2a) ++ Look at the expected output
var output1 = addMoreEnthusiasm("I want pizza")
console.assert( output1  === "I want pizza!!!" );

// (2b)
var output2 = addMoreEnthusiasm("Hey")
console.assert( output2 === "Hey!!!");

// (2c)
var output3 = addMoreEnthusiasm("mother")
console.assert( output3 === "mother!!!");

// (2d)
var output4 = addMoreEnthusiasm("ouch")
console.assert( output4 === "ouch!!!");
```
