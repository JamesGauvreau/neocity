//  ::  Names

// TODO
// - Calendar of saints
// - Revolutionary: Days of the Republican Calendar
// - Revolutionary: Months of the Republican Year
// - Chance for first names to be hyphenated.
// - Chance for diminutives: Masculine: -et, -on, -ot, -ou; as well as Middle
//   French: -el, -in, -eau in place of -ou
// - Diminutives: Feminine: -ette, -elle; Middle French: -on, -ine
// Diminutives may require a special rule.

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

// document.getElementById(`generator`).innerHTML = `${firstName} ${lastName}`;

// https://tackoverflow.com/questions/54708626/random-name-generator-works

// ## First Names, Masculine

// ## First Names, Feminine

// ## Surnames, Simple

// ## Surnames, Complex

//  Determine gender
//  M || F
//  First Names:
//  1 Default
//  2 Hyphenation
//  3 Diminutive
// modern: -et, -on, -ot, -ou
// old: -eau, -et, -on, -ot, -el, -in

// Lucianus/Luciana, Marcellus/Marcella, Renatus/Renata

const givenName = [
  // 21 names
  ["Albin", "Albinon", "Albine", "Albinette"],
  ["André", "Dédé", "Andrée", "Andrette"],
  ["Corentin", "Coco", "Corentine", "Coco"],
  ["Dominique", "Dodo", "Dominique", "Dodo"],
  ["Estienne", "Estève", "Estienette", "Tiennette"],
  ["Stéphane", "Stef", "Stéphanie", "Steffi"],
  ["Germain", "Germot", "Germaine", "Germainelle"],
  ["Georges", "Georgot", "Georgine", "Georginette"],
  ["Gérard", "Gerot", "Gérarde", "Gerardine"],
  ["Jacques", "Jacquet", "Jacqueline", "Jacotte"],
  ["Jehan", "Jeannot", "Jehanne", "Jehannette"],
  ["Joseph", "Jojo", "Josèphe", "Josélaine"],
  ["Louis", "Loulou", "Louise", "Louisette"],
  ["Lucien", "Lulu", "Lucienne", "Lucette"],
  ["Marc", "Marcel", "Marcelle", "Marcelline"],
  ["Nicolas", "Nico", "Nicole", "Nico"],
  ["Pierre", "Pierrot", "Perrette", "Perrelle"],
  ["René", "Renét", "Renée", "Renétte"],
  ["Thomas", "Toto", "Thomasse", "Thomine"],
  ["Vespre", "Vesprot", "Vespree", "Vesprette"],
  ["Yves", "Yvon", "Yvette", "Yvonne"],
];

function prenomGen() {
  givenNameArray = givenName[randomNumber(givenName.length)];
  checkMF = randomNumber(10); // # 0 – 9
  if(checkMF % 2 === 0) { // Piggybacks off "checkMF" as much as possible.
    if(checkMF === 6) {
      return givenNameArray[3]
    } else if (checkMF === 8){
      secondArray = givenName[randomNumber(givenName.length)];
      return givenNameArray[2] + "-" + secondArray[2]
    } else {
      return givenNameArray[2]
    }
  } else {
    if(checkMF === 7) {
      return givenNameArray[1]
    } else if (checkMF === 9) {
      secondArray = givenName[randomNumber(givenName.length)];
      return givenNameArray[0] + "-" + secondArray[0]
    } else {
      return givenNameArray[0]
    }
  }
}

console.log(prenomGen())

const surnameVingt = [
  "Anouilh",
  "Augur",
  "Badeaux",
  "Bastarache",
  "Bataillier",
  "Baudelaire",
  "Durand",
  "Erbier",
  "Hasteeur",
  "Janvier",
  "Langlois",
  "Larousse",
  "Maignen",
  "Ossier",
  "Parcheminier",
  "Salé",
  "Terreur",
  "Toussaint",
  "Vautour",
  "Voland",
];

const surnameMois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

const surnameStem = [
  "bois",
  "cadavre",
  "chouette",
  "corbeau",
  "croix",
  "eau",
  "forgeron",
  "fée",
  "fils",
  "fille",
  "flamme",
  "foi",
  "grange",
  "houx",
  "lieu",
  "loup",
  "maitre",
  "mont",
  "pigeon",
  "pyjon",
  "rue",
  "soleil",
];

const surnameSuffix = [0, 1, "Beau", "Belle", "Bon", "Des", "Mal"];
const surnameComplex = ["da", "du", "la", "le"];

function surnameBuilder() {
  // numberCheck = randomNumber(4);
  numberCheck = 3
  if (numberCheck === 0) {
    surname = surnameVingt[randomNumber(surnameVingt.length)];
    return surname;
  } else if(numberCheck === 1) {
    surname = surnameVingt[randomNumber(surnameMois.length)];
    return surname;
  } else {
    // suffix = surnameSuffix[randomNumber(surnameSuffix.length)];
    suffix = surnameSuffix[1];
    // stem = surnameStem[randomNumber(surnameStem.length)];
    stem = surnameStem[13];
    if(suffix === 0){
    if(stem === "bois" || "houx" || "lieu") {
      return "Du" + stem;
    } else if(stem === "leau") {
      return "De" + stem;
    } else if(stem === "croix" || "foi" || "rue") {
      return "Dela" + stem + "x";
    } else if(stem === "cadavre" || "corbeau" || "forgeron" || "fée" || "fils" || "loup" || "maitre" || "mont" || "pigeon" || "pyjon" || "soleil") {
      return "Le" + stem; 
    } else if(stem === "chouette" || "fille" || "flamme" || "grange") {
      return "La" + stem;
    }
    else {
      return suffix + " " + stem;
    }
  } else if(suffix === 1) {
    // as above, but a compound w/o space
  }
  else {
    return suffix + stem;
  }
  }
}

// "chouette","fille","flamme","grange",

function fullNameBuilder() {
  return prenomGen() + " " + surnameBuilder();
}

console.log("1: " + fullNameBuilder());
console.log("2: " + fullNameBuilder());
console.log("3: " + fullNameBuilder());

const surnameSuffixSpecial = [
  // These may be du Bois, Dubois; de L'eau, Deleau; le Cadavre, Lecadavre; la
  // Chouette, Lachouette; de la Croix, Delacroix; etc. A special rule will be
  // necessary to handle such cases.]
];

const produceNameGiven = 0;
