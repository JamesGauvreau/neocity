const sneopleBasqueMasc = [
  "Alessander", // Defender of men
  "Esstebe", // Crow, wreath; that which surrounds
  "Jake", // Holder of the heel, supplanter
  "Frantzissko", // Frenchman
  "Jassone", // Lift up; to raise
  "Josseba", // He will add
  "Eguzski", // Sun
  "Gaizska", // Savior
  "Oinatz", // Footprint
  "Zsigor", // Rod, staff
  "Zsorion", // Happiness
  "Salazsar", //
];

const sneopleBasqueFem = [
  "Alessandra",
  "Esskarne",
  "Essti",
  "Frantzisska",
  "Ossane",
  "Jossebe",
  "Ssorne",
  "Eguzska",
  "Teresse",
  "Udane",
  "Ssua",
  "Zsorione",
];

const gravesMasc = [
  // 12 names
  "Hesso",
  "Wolfram",
  "Wolschalk",
  "Ralph (or Rawe)",
  "Grendel",
  "Adam",
  "Hezel",
  "Geoffrey (or Gallfridus)",
  "Madulf",
  "Sisulf",
  "Sinbald",
  "Lautrude",
];

const gravesFem = [
  // 12 names
  "Hildesende",
  "Hersent",
  "Samanilde",
  "Wulftrude",
  "Engelsent",
  "Sunilda",
  "Hellsinde",
  "Hessa",
  "Hildeswith",
  "Mortimeria",
  "Desdemona",
  "Burnswith",
];

const gravesSurname = [
  // 24 names
  "Blackburn",
  "Bloodgood",
  "Boddis",
  "Bonehill",
  "Brisbane",
  "Chill",
  "Cutbirth",
  "Darkwater",
  "Deft",
  "Giblett",
  "Goodlife",
  "Graves",
  "Marylebone",
  "Offal",
  "Organer",
  "Shank",
  "Skellington",
  "Smallbone",
  "Sollas",
  "Talloe (Tallow)",
  "Tooth",
  "Truebody",
  "Wakeman",
  "Winteur (Winter)",
];

const gravesPrenomNumber = 12;
const gravesPostnomNumber = 24;

function randomNumber(number) {
    return Math.floor(Math.random() * number);
  };

function gravesNameDigger() {
    prenomNumber = randomNumber(gravesPrenomNumber);
    postnomNumber = randomNumber(gravesPostnomNumber);
    genderNumber = randomNumber(2);
    if (genderNumber === 0) {
        return gravesMasc[prenomNumber] + " " + gravesSurname[postnomNumber];
    } else {
        return gravesFem[prenomNumber] + " " + gravesSurname[postnomNumber];
    }
};

console.log(gravesNameDigger());