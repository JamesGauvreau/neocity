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

let firstName = `John`;
let lastName = `Smith`;

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
  ["Albin", "Albinon", "Albine"],
  ["André", "Dédé", "Andrée", "Andrette"],
  ["Corentin", "Coco", "Corentine", "Coco"],
  ["Dominique", "Dodo", "Dominique"],
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
  ["Pierre", "Pierrot", "Perrette"],
  ["René", "Renét", "Renée", "Renétte"],
  ["Thomas", "Toto", "Thomasse", "Thomine"],
  ["Vespre", "Vesprot", "Vespree", "Vesprette"],
  ["Yves", "Yvon", "Yvette", "Yvonne"],
];

function prenomTypeBuilder() {
  rollPrenom = randomNumber(10);
  if (rollPrenom >= 8) {
    const typePrenom = "Special";
    return typePrenom;
  } else {
    const typePrenom = "Standard";
    return typePrenom;
  }
}

console.log(givenName[0]);

function prenomDisarray() {
  rollPrenom = randomNumber(21);
  selectPrenom = givenName[rollPrenom];
  return selectPrenom;
}

function prenomChooser() {
  rollGender = randomNumber(2);
  if {}
};

const prenomArray = prenomDisarray();

console.log(prenomArray);
console.log(prenomDisarray([1]));

// function prenomBuilder() {
//   gender = randomNumber(2);
//   rollPrenom = randomNumber(21);
//   if (gender === 0 && )
// }

console.log(prenomTypeBuilder());

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
  "frange",
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

const surnameSuffix = ["Beau", "Belle", "Bon", "Des", "Mal"];
const surnameComplex = ["da", "du", "la", "le"];

function surnameBuilder() {
  numberCheck = randomNumber(2);
  if (numberCheck === 0) {
    rollVingt = randomNumber(20);
    surname = surnameVingt[rollVingt];
    return surname;
  } else {
    rollSuffix = randomNumber(5);
    rollStem = randomNumber(20);
    suffix = surnameSuffix[rollSuffix] + surnameStem[rollStem];
    return suffix;
  }
}

console.log(surnameBuilder());

const surnameSuffixSpecial = [
  // These may be du Bois, Dubois; de L'eau, Deleau; le Cadavre, Lecadavre; la
  // Chouette, Lachouette; de la Croix, Delacroix; etc. A special rule will be
  // necessary to handle such cases.]
];

const produceNameGiven = 0;
