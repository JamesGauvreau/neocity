function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

const nameTemplate = {
  engMasc: 0,
  engFem: 0,
  meaning: 0,
  defaultDimRoot: 0,
  engDimMasc: 0,
  engDimFem: 0,
  cornMasc: 0,
  cornFem: 0,
  cornDimMasc: 0,
  cornDimFem: 0,
  fraMasc: 0,
  fraFem: 0,
  fraDimMasc: 0,
  fraDimFem: 0,
  ireMasc: 0,
  ireFem: 0,
  ireDimMasc: 0,
  ireDimFem: 0,
  latMasc: 0,
  latFem: 0,
  latDimMasc: 0,
  latDimFem: 0,
  scotMasc: 0,
  scotFem: 0,
  scotDimMasc: 0,
  scotDimFem: 0,
  welshMasc: 0,
  welshFem: 0,
  welshDimMasc: 0,
  welshDimFem: 0,
  isFlower: false,
  isPuritan: false,
  isReligious: false,
  isUnusual: false,
}

const nameHenry = {
  engMasc: ["Henry"],
  engFem: ["Harriett", "Harrietta", "Henrietta", "Henrietta"],
  meaning: "home ruler",
  defaultDimRoot: ["Hal", "Han", "Hen"],
  engDimMasc: ["Hank", "Harry", "Herry"],
  cornMasc: 0,
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