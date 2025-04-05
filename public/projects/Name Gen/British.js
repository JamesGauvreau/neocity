import { portArray } from './BritNameList.js';

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

// console.log(portArray[0].engFem[1]);
// console.log(portArray[0].meaning);

// Check: 
// isFlower, isPuritan, isReligious, isUnusual

// Use checkboxes to define isMasc, isFem, etc., and populate 'let genderArray' as appropriate.
// Use checkboxes to define cultures, and pop the appropriate cultures into 'let cultureArray'.
// Use genderArray.length and cultureArray.length for randomNumber().

function prenomGen() {
    let prenomArray = portArray[randomNumber(portArray.length)].engFem[0];
    return prenomArray;
}

console.log(prenomGen());
console.log(portArray.length);