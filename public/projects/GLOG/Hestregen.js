function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

const kindArray = [
  "Bugbear",
  "Packling",
  "Snerson",
  "Human (Crabhead)",
  "Human (Dwarf)",
  "Human (Edderkop)",
  "Human (Gangle)",
  "Human (Mantaur)",
  "Human (Orc)",
];

function kindTest() {
  genKind = kindArray[randomNumber(20)];
  if (genKind === undefined) {
    numGen = randomNumber(20);
    if (numGen === 0) {
      return "Human (Foreign)";
    } else {
      return "Human";
    }
  } else if (genKind == "Bugbear") {
    numGen = randomNumber(20);
    if (numGen === 0) {
      return genKind + " " + "(Trapero, Demigorgon, etc.)";
    } else {
      return genKind + " " + "(Wodegrim)";
    }
  } else if (genKind == "Snerson") {
    numGen = randomNumber(20);
    if (numGen === 0) {
      return genKind + " " + "(Maniwyrm, Seidenwurm, etc.)";
    } else {
      return genKind + " " + "(Binheseb)";
    }
  } else if (genKind == "Packling") {
    numGen = randomNumber(20);
    if (numGen === 0) {
      return genKind + " " + "(Choux, Kelek, Lachaníde, etc.)";
    } else {
      return genKind + " " + "(Cale)";
    }
  } else if (genKind === "Human (Dwarf)") {
    numGen = randomNumber(10);
    if (numGen === 0) {
      return genKind + " " + "(Bunderbunde)";
    } else {
      return genKind + " " + "(Northmannish Hestrian)";
    }
  } else if (genKind == "Human (Edderkop)") {
    numGen = randomNumber(10);
    if (numGen === 0) {
      result = genkind + " " + "(Thulish Immigrant)";
      return result;
    } else {
      return genKind + " " + "(Thulish Hestrian)";
    }
  } else if (genKind == "Human (Gangle)") {
    numGen = randomNumber(10);
    if (numGen === 0) {
      return genKind + " " + "(Plackish)";
    } else {
      return genKind;
    }
  } else if (genKind == "Human (Mantaur)") {
    numGen = randomNumber(5);
    if (numGen === 0) {
      return genKind + " " + "(Forintian)";
    } else {
      return genKind;
    }
  } else {
    return genKind;
  }
}

console.log(kindTest());
console.log(kindTest());
console.log(kindTest());
console.log(kindTest());
console.log(kindTest());
