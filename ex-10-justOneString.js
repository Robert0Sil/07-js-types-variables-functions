/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/
function justOneString(txt1, txt2){
var text1 = typeof txt1
var text2 = typeof txt2

if (text1 === 'string' && text2 !== 'string'){
  return true
}else if(text1 !== 'string' && text2 === 'string'){
  return true
}else{
  return false
}

}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
