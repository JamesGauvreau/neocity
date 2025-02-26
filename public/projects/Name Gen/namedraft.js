function randomNumber(number) {
    return Math.floor(Math.random() * number);
  }

const testArray = "dog"

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
  engDimElse: ["Ab","Alby"],
  scotMasc: "Ailbeart",
}

const nameArray = [Albert]

const dimSuffixArray = ["amin","cock","e","el","ehon"]

function dimSuffix() {
  return dimSuffixArray[randomNumber(dimSuffixArray.length)]
};

console.log(nameArray[0].engDimRoot+dimSuffix());

console.log(Albert.engDimRoot+dimSuffix());

// console.log(nameNormal.englishMasc)
// console.log(nameNormal.meaning)