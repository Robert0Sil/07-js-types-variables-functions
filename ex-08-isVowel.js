/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/

function isVowel(vow){

  if(vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u' || vow === 'y'){
    return true
  }
  else if(vow === 'A' || vow === 'E' || vow === 'I' || vow === 'O' || vow === 'U' || vow === 'Y'){
    return true
  }else{
    return false
  }
}




 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
