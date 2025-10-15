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
// if result is undefined, start at beginning and try again. 
// should check whether there was already an issue, and if there's an issue more than three times, instead return "N/A (recurring error)"
// For isFlower, etc., use a loop to check each item and pop into a new array if the criteria are fit.

let testArray = portArray[randomNumber(100)].english_F;
let isFlower = false;

function testPush() {
    if (isFlower === true) {
        testArray.push("Flower name");
    } else {
        // dog = false;
    }
    return testArray;
}

console.log("testArray test: " + portArray[0].english_F[0]);
console.log("testPush test: " + testPush());

function prenomGen() {
    let prenomArray = portArray[randomNumber(portArray.length)].english_F[0];
    return prenomArray;
}

console.log(prenomGen());
console.log(portArray.length);
console.log(portArray[0].english_F[0]);