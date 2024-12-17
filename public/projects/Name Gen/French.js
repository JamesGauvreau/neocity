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

let firstName = `John`;
let lastName = `Smith`;

document.getElementById(`generator`).innerHTML = `${firstName} ${lastName}`;

// https://tackoverflow.com/questions/54708626/random-name-generator-works

// ## First Names, Masculine

// ## First Names, Feminine

// ## Surnames, Simple

// ## Surnames, Complex

const surnameStem = [
  "Bois",
  "Cadavre",
  "Chouette",
  "Corbeau",
  "Croix",
  "Eau",
  "Forgeron",
  "Fée",
  "Fils",
  "Fille",
  "Flamme",
  "Foi",
  "Grange",
  "Houx",
  "Lieu",
  "Loup",
  "Maitre",
  "Mont",
  "Pigeon",
  "Pyjon",
  "Rue",
  "Soleil",
];

const surnameSuffix = ["Beau", "Bell", "Bon", "Des", "Mal"];

const surnameSuffixSpecial = [
  // These may be du Bois, Dubois; de L'eau, Deleau; le Cadavre, Lecadavre; la
  // Chouette, Lachouette; de la Croix, Delacroix; etc. A special rule will be
  // necessary to handle such cases.]
];
