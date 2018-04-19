/**
 * (DEMO) addMoreEnthusiam()
 * ------------------------------------------------------
 * Write a function called `addMoreEnthusiam` that takes a string as
 * input and appends three exclamation marks to the end of the string.
 *
 **/



// (DEMO) You, the student, will write the function
function addMoreEnthusiasm(inputTxt){

	// ...and your code goes here
	var inputWithEnthusiasm = inputTxt + "!!!"
   return inputWithEnthusiasm
	 // Remember, you must return a value. Nice!
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = addMoreEnthusiasm("I want pizza")
console.assert( output1  === "I want pizza!!!" );

var output2 = addMoreEnthusiasm("Hey")
console.assert( output2 === "Hey!!!");

var output3 = addMoreEnthusiasm("mother")
console.assert( output3 === "mother!!!");

var output4 = addMoreEnthusiasm("ouch")
console.assert( output4 === "ouch!!!");
