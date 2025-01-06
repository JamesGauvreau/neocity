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
]

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
]

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

const surnameSuffix = ["Beau", "Bell", "Bon", "Des", "Mal"];
const surnameComplex = ["da", "du", "la", "le"]

function surnameBuilder() {
  numberCheck = randomNumber(3);
  if (numberCheck > 1) {
    return "If"
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