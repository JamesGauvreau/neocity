// Empty, for now.

const prenomNormal = ["Bogrod", "Gornuk", "Nalrod", "Ragnok"];

const prenomNorse1syll = [
  "An",
  "Brak",
  "Dolg",
  "Eit",
  "Lim",
  "Lit",
  "Nar",
  "Oen",
  "Ur",
  "Vit",
  "Zind",
];

// Alguff,G Brodrig,P Burgock,G Eargit,G Nagnok,G Ranrok,G Ricbert,F

const prenomNorse2syll = [
  "Dagvin",
  "Felar",
  "Ginar",
  "Hanar",
  "Motsog",
  "Nirat",
  "Orvang",
  "Skafit",
  "Thek",
];

const prenomUrPrefix = ["Ur"];

const surnameVerb = [
  "Bang",
  "Cast",
  "Clip",
  "Drum",
  "Flit",
  "Goad",
  "Grin",
  "Grip",
  "Hark",
  "Join",
  "Make",
  "Plum",
  "Rack",
  "Rend",
  "Root",
  "Sear",
  "Snip",
  "Tilt",
  "Turn",
  "Wend",
  "Whet",
];

const surnameNoun = [
  "Bolt",
  "Cord",
  "Damp",
  "Flux",
  "Fume",
  "Gard",
  "Gulf",
  "Hook",
  "Karn",
  "Link",
  "Lode",
  "Melt",
  "Nail",
  "Pipe",
  "Quar",
  "Root",
  "Seed",
  "Slab",
  "Vein",
  "Wick",
];

// Function for combing surnames will distinguish between norse and non-norse surnames. It should also count the number of entries in a given array in order to roll the right number.
// Chance of prenoms having "Ur-" prefix, which is higher if the prenom has only one syllable.

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

function goblinNamer() {
  const checkNorse = randomNumber(10);
  const checkPostnom = randomNumber(5);
  const genPrenom = prenomNormal[randomNumber(prenomNormal.length)];
  const genSurnameVerb = surnameVerb[randomNumber(surnameVerb.length)];
  const genSurnameNoun = surnameNoun[randomNumber(surnameNoun.length)].toLowerCase();
  const genSurname = genSurnameVerb + genSurnameNoun;
  return "Your goblin's name is " + genPrenom + " " + genSurname;
}

console.log(goblinNamer());