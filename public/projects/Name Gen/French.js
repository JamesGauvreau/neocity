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

function getSelectedRadioButton() {
  // Get all radio buttons with the name "prenomenFrench"
  var radios = document.getElementsByName('prenomenFrench');

  // Loop through the radio buttons and find the selected one
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // Return the ID of the selected radio button
      return radios[i].id;
    }
  }
  // Return null if no radio button is selected (though this shouldn't happen with your current setup)
  return null;
}

// Trigger when a radio button is selected
document.querySelectorAll('input[name="prenomenFrench"]').forEach(function (radio) {
  radio.addEventListener('change', function () {
    // Get the selected radio button ID from the function
    var selectedRadioId = getSelectedRadioButton();

    // You can use the result (selectedRadioId) as needed
    console.log(selectedRadioId);
  });
});

console.log(getSelectedRadioButton());

const givenName = [
  // 21 names
  ["Albin", "Albinon", "Albine", "Albinette"],
  ["Andr&eacute;", "D&eacute;d&eacute;", "Andr&eacute;e", "Andrette"],
  ["Corentin", "Coco", "Corentine", "Coco"],
  ["Dominique", "Dodo", "Dominique", "Dodo"],
  ["Estienne", "Est&egrave;ve", "Estienette", "Tiennette"],
  ["St&eacute;phane", "Stef", "St&eacute;phanie", "Steffi"],
  ["Germain", "Germot", "Germaine", "Germainelle"],
  ["Georges", "Georgot", "Georgine", "Georginette"],
  ["G&eacute;rard", "Gerot", "G&eacute;rarde", "Gerardine"],
  ["Jacques", "Jacquet", "Jacqueline", "Jacotte"],
  ["Jehan", "Jeannot", "Jehanne", "Jehannette"],
  ["Joseph", "Jojo", "Jos&egrave;phe", "Jos&eacute;laine"],
  ["Louis", "Loulou", "Louise", "Louisette"],
  ["Lucien", "Lulu", "Lucienne", "Lucette"],
  ["Marc", "Marcel", "Marcelle", "Marcelline"],
  ["Nicolas", "Nico", "Nicole", "Nico"],
  ["Pierre", "Pierrot", "Perrette", "Perrelle"],
  ["Ren&eacute;", "Ren&eacute;t", "Ren&eacute;e", "Ren&eacute;tte"],
  ["Thomas", "Toto", "Thomasse", "Thomine"],
  ["Vespre", "Vesprot", "Vespree", "Vesprette"],
  ["Yves", "Yvon", "Yvette", "Yvonne"],
];

function prenomGen() {
  givenNameArray = givenName[randomNumber(givenName.length)];
  console.log("givenNameArray: " + givenNameArray)

  checkGender = getSelectedRadioButton();
  console.log("checkGender: " + checkGender);

  function callGender() {
    if (getSelectedRadioButton() == "feminineFrench") {
      femArray = [0, 2, 4, 6, 8];
      return femArray[randomNumber(femArray.length)]
    } else if (getSelectedRadioButton() == "masculineFrench") {
      mascArray = [1, 3, 5, 7, 9];
      return mascArray[randomNumber(mascArray.length)]
    } else {
      return randomNumber(10);
    }
  };

  checkMF = callGender();
  console.log("checkMF: " + checkMF);

  // randomNumber(10); // # 0 – 9
  checkUnusual = randomNumber(4);
  console.log("checkUnusual: " + checkUnusual)

  let secondArray;
  do {
    secondArray = givenName[randomNumber(givenName.length)];
  } while (secondArray === givenNameArray); // Continue regenerating if secondArray matches givenNameArray
  console.log("secondArray (after check): " + secondArray);
  
  if (checkMF % 2 === 0) {
    // Piggybacks off "checkMF" as much as possible.
    if (checkUnusual === 0) {
      if (checkMF === 8) {
        return givenNameArray[3];
      } else if (checkMF === 6 || checkMF === 4) {
        return givenNameArray[2] + "-" + secondArray[2];
      } else if (checkMF === 2) {
        return givenNameArray[2] + "-" + secondArray[0];
      } else {
        return givenNameArray[2] + " " + secondArray[2];
      }
    } else {
      return givenNameArray[2];
    }
  } else {
    if (checkUnusual === 0) {
      if (checkMF === 9) {
        return givenNameArray[1];
      } else if (checkMF === 7) {
        return givenNameArray[0] + "-" + secondArray[0];
      } else if (checkMF === 5) {
        return givenNameArray[0] + "-Marie";
      } else if (checkMF === 3) {
        return givenNameArray[0] + "-" + secondArray[2];
      } else {
        return givenNameArray[0] + " " + secondArray[0];
      }
    }
    if (checkMF === 7) {
      return givenNameArray[1];
    } else if (checkMF === 9) {
      secondArray = givenName[randomNumber(givenName.length)];
      return givenNameArray[0] + "-" + secondArray[0];
    } else {
      return givenNameArray[0];
    }
  }
}

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
  "Sal&eacute;",
  "Terreur",
  "Toussaint",
  "Vautour",
  "Voland",
];

const surnameMois = [
  "Janvier",
  "F&eacute;vrier",
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
  "f&eacute;e",
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
  numberCheck = randomNumber(4);
  // numberCheck = 3;
  if (numberCheck === 0) {
    surname = surnameVingt[randomNumber(surnameVingt.length)];
    return surname;
  } else if (numberCheck === 1) {
    surname = surnameVingt[randomNumber(surnameMois.length)];
    return surname;
  } else {
    suffix = surnameSuffix[randomNumber(surnameSuffix.length)];
    // suffix = surnameSuffix[1];
    stem = surnameStem[randomNumber(surnameStem.length)];
    // stem = surnameStem[21];
    if (suffix === 0) {
      if (stem === "bois" || stem === "houx" || stem === "lieu") {
        // Don't forget that || separates distinct arguments
        return "Du" + stem;
      } else if (stem === "eau") {
        return "De" + "l" + stem;
      } else if (stem === "croix") {
        return "Dela" + stem;
      } else if (stem === "foi") {
        return "Dela" + stem + "x";
      } else if (stem === "rue") {
        return "Dela" + stem;
      } else if (
        stem === "cadavre" ||
        stem === "corbeau" ||
        stem === "forgeron" ||
        stem === "f&eacute;e" ||
        stem === "fils" ||
        stem === "loup" ||
        stem === "maitre" ||
        stem === "mont" ||
        stem === "pigeon" ||
        stem === "pyjon" ||
        stem === "soleil"
      ) {
        return "Le" + stem;
      } else if (stem == "chouette" || "fille" || "flamme" || "grange") {
        return "La" + stem;
      } else {
        return "ERROR";
      }
    } else if (suffix === 1) {
      stemNew = stem.charAt(0).toUpperCase() + stem.slice(1);
      if (stem === "bois" || stem === "houx" || stem === "lieu") {
        // Don't forget that || separates distinct arguments
        return "du " + stemNew;
      } else if (stem === "eau") {
        return "de " + "L'" + stemNew;
      } else if (stem === "croix") {
        return "de la " + stemNew;
      } else if (stem === "foi") {
        return "de la " + stemNew + "x";
      } else if (stem === "rue") {
        return "de la " + stemNew;
      } else if (
        stem === "cadavre" ||
        stem === "corbeau" ||
        stem === "forgeron" ||
        stem === "f&eacute;e" ||
        stem === "fils" ||
        stem === "loup" ||
        stem === "maitre" ||
        stem === "mont" ||
        stem === "pigeon" ||
        stem === "pyjon" ||
        stem === "soleil"
      ) {
        return "le " + stemNew;
      } else if (stem == "chouette" || "fille" || "flamme" || "grange") {
        return "la " + stemNew;
      } else {
        return "ERROR";
      }
      // as above, but a compound w/o space
    } else {
      return suffix + stem;
    }
  }
}

// "chouette","fille","flamme","grange",

function fullNameBuilder() {
  return (document.getElementById(
    "genFrenchName"
  ).innerHTML = `<b>French Name:</b> ${prenomGen() + " " + surnameBuilder()}.`);
}

fullNameBuilder();

buttonFrench.onclick = fullNameBuilder;
