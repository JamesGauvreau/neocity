// Great Britain and Ireland

// SCHEME
// Each name consists of:
// 0    Formal / Latin
// 1    Diminutive - may have up to two forms
// 2    Standard Name
// 3    Spelling Variant of Standard Name
// 4    Alternate Version
// 5    Empty
// 6    Empty
// 7    Empty
// 8    Empty
// 9    Empty
// 10   Language-specific group: If there is no language-specific variant for a
//      given language, then it contains the standard name

//

// Simple version first
// 0    Standard
// 1    Formal / Latin
// 2    Diminutive
// 3    Variant

const givenEnglishMasc = [
    ["Arthur","Artur","Art","Arthure"],
    ["Augustine","Augustinus","August","Austin"],
    ["Charles","Carolus","Charlie","Charells"],
    ["Edmund","Eadmundus","Ned","Edmond"],
    ["Eugene","Eugenius","Gene","Eugein"],
    ["Francis","Franciscus","Fran","Frawnces"],
    ["Frederick","Fredericus","Fred","Frederick"],
    ["George","Georgius","Georgie","Gorge"],
    ["Henry","Henricus","Hawkin","Hendry"],
    ["Hugh","Hugone","Hughelot","Howe"],
    ["James","Jacobus","Jaycock","Jacob"],
    ["John","Jannus","Jacke","St John"],
    ["Laurence","Laurentius","Lawrie","Lawrens"],
    ["Nicholas","Nicholaum","Nick","Nyclis"],
    ["Peter","Petrus","Pell","Pierce"],
    ["Richard","Ricardus","Richer","Cardine"],
    ["Robert","Rodbertus","Robin","Roberdes"],
    ["Roger","Rogerus","Dodge","Rodger"],
    ["Thomas","Tomas","Thome","Tommis"],
    ["William","Willelmus","Wilke","Gilliam"],
]

const pullName = givenEnglishMasc[0];

function randomNumber(number) {
    return Math.floor(Math.random() * number);
  }

function randomName() {
    const nameSet = givenEnglishMasc[randomNumber(20)];
    const nameExact = nameSet[randomNumber(4)];
    return nameExact;
}

console.log(givenEnglishMasc[0]);
console.log(pullName[0]);
console.log(randomName());