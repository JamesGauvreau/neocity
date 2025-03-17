function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

const nameTemplate = {
  engMasc: 0,
  engFem: 0,
  meaning: 0,
  defaultDimRoot: 0,
  engMascDim: 0,
  engFemDim: 0,
  cornMasc: 0,
  cornFem: 0,
  cornMascDim: 0,
  cornFemDim: 0,
  fraMasc: 0,
  fraFem: 0,
  fraMascDim: 0,
  fraFemDim: 0,
  ireMasc: 0,  
  ireFem: 0,
  ireMascGae: 0,
  ireFemGae: 0,
  ireMascDim: 0,
  ireFemDim: 0,
  ireMascDimGae: 0,
  ireFemDimGae: 0,
  latMasc: 0,
  latFem: 0,
  latMascDim: 0,
  latFemDim: 0,
  scotMasc: 0,
  scotFem: 0,
  scotMascGae: 0,
  scotFemGae: 0,
  scotMascDim: 0,
  scotFemDim: 0,
  scotMascDimGae: 0,
  scotFemDimGae: 0,
  welshMasc: 0,
  welshFem: 0,
  welshMascDim: 0,
  welshFemDim: 0,
  isFlower: false,
  isPuritan: false,
  isReligious: false,
  isUnusual: false,
}

// needs to identify whether there's an array.

const nameHenry = {
  engMasc: ["Henry"],
  engFem: ["Harriett", "Harrietta", "Henrietta", "Henrietta"],
  meaning: "home ruler",
  defaultDimRoot: ["Hal", "Han", "Hen"],
  engMascDim: ["Hank", "Harry", "Herry"],
  corFemDim 0,
  cornFem: 0,
  cornDim: 0,
  fraMasc: 0,
  fraFem: 0,
  fraDim: 0,
  ireMasc: 0,
  ireFem: 0,
  ireDim: 0,
  latMasc: 0,
  latFem: 0,
  latDim: 0,
  scotMasc: 0,
  scotFem: 0,
  scotDim: 0,
  welshMasc: 0,
  welshFem: 0,
  welshDim: 0,
}

const nameNormal = {
  englishMasc: testArray,
  englishFem: "Beatrice",
  meaning: "traveler, voyager",
  diminutiveMain: "Bet",
}

const Albert = {
  engMasc: "Albert",
  engFem: "Albertine",
  engDimRoot: "Bert",
  engDimElse: ["Ab", "Alby"],
  scotMasc: "Ailbeart",
}

const dimObject = {
  engMasc: "kin",
  welshMasc: "cynn"
}

const nameArray = [Albert]

const dimSuffixArray = ["amin", "cock", "e", "el", "ehon"]

function dimSuffix() {
  return dimSuffixArray[randomNumber(dimSuffixArray.length)]
};

console.log(nameArray[0].engDimRoot + dimSuffix());

console.log(Albert.engDimRoot + dimSuffix());

// console.log(nameNormal.englishMasc)
// console.log(nameNormal.meaning)