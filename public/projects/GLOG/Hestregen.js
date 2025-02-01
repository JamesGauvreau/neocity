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
  "Human (Unusual Mutant)",
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

const arrayOmens = [
  "Blood-red comet out of the north. Visible night and day for thirteen days.",
  "Stars begin vanishing from the sky.",
  "The constellations rearrange into new and unfamiliar shapes.",
  "Solar eclipse. Totality is universal, lasts an entire day.",
  "Wild auroras across the land for three nights.",
  "All birds depart, even the non-migratory ones.",
  "The moon stays full for an entire month.",
  "For three months all children born in the kingdom are twins.",
  "All steel and iron rusts overnight.",
  "A flock of nine black swans appears, can't be driven off.",
  "Massive earthquake levels every temple in the capital city, no other damage.",
  "Tolling bells heard from deep underground.",
  "The moon vanishes, doesn't return.",
  "Livestock are born with the heads of vultures and serpents.",
  "New planets appear in the sky.",
  "Thousand-strong flocks of ravens descend to bear witness.",
  "Every mirror shatters at once.",
  "Catastrophic thunderstorms, chain lightning strikes the palace non-stop for three days.",
  "Hundreds of thousands of worms crawl from the soil and carpet the land.",
  "Lights seen floating deep in the ocean, answering glows kindle in all the lakes and rivers of the kingdom.",
  "Hailstones from a perfectly clear sky, sound like chimes as they fall.",
  "The sun turns dull and gray, doesn't set for nine days.",
  "Fruit trees bloom out of season.",
  "Tsunami and rogue waves batter the coast but only destroy naval ships.",
  "Meteor showers, the countryside is littered with sky-iron and craters in precise geometric patterns.",
  "Every child in the kingdom has the same recurring dream of an endless sea of dust, slowly spreads to their families.",
  "Doves speak with the voices of the dead.",
  "Wildfires rage across the countryside in a pattern of perfect interlocking rings.",
  "A multitude of fish and whales swim ashore to beach themselves and die.",
  "The bees begin a new dance.",
];

const arrayOmensPlague = [
  "A distant and once-prosperous city fallen into a sudden decline.",
  "A common trade good is no longer available, and no one knows why.",
  "A rare herb or flower is suddenly in demand in a trading port, worth its weight in gold.",
  "A nation across the sea has closed its ports and burns any ship approaching. Their king has gone mad, it is said.",
  "Flocks of crows are flying south in huge numbers.",
];

const arrayMobCause = [
  "Education. Free and reformed schools will wipe out crime and immorality.",
  "Temperance. Liquor is the cause of many social evils. It must be abominated.",
  "Coppers. Who do they think they are anyway? Violent meddling thugs.",
  "Gumperts. Endon Values, Harsh Penalties, and The Good Old Days. Colour is green.",
  "Crisis of the Day. As promoted by the Newspapers. What is to be done?",
  "Employment. These newfangled Innovations are ruining thousands of workers.",
  ",Food Security. Starvation and malnutrition are preventable.",
  "Bogs. Lower Taxes, Endon Prosperity, and More Wars. Colour is blue.",
  "Votes. Votes for men without property. Votes for women with property.",
  "Animal Cruelty. Better treatment of horses, dogs, and polymorphed beasts.",
  "Minimum Working Age. 8 is far too young. 10 or even 12 might be acceptable.",
];

const news = [
  "Supplies of a vital material are running low",
  "Feud between rival guilds or consortiums is growing violent",
  "The old house down the lane is haunted.",
  "They say it's just rats in the basement, but I've never heard of rats that can sing.",
  "Unexplained nightly disappearances.",
];

const writeNPC = (document.getElementById(
  "NPC"
).innerHTML = `<h2>Char #1</h1> <b>Kind:</b> ${kindTest()}<br><b>\#\:</b> ${randomNumber(
  100
)}, ${randomNumber(100)} || ${randomNumber(
  20
)}.<br><h2>Char #2</h1> <b>Kind:</b> ${kindTest()}<br><b>\#\:</b> ${randomNumber(
  100
)}, ${randomNumber(100)} || ${randomNumber(
  20
)}.<br><h2>Char #3</h1> <b>Kind:</b> ${kindTest()}<br><b>\#\:</b> ${randomNumber(
  100
)}, ${randomNumber(100)} || ${randomNumber(
  20
)}.<br><h2>Char #4</h1> <b>Kind:</b> ${kindTest()}<br><b>\#\:</b> ${randomNumber(
  100
)}, ${randomNumber(100)} || ${randomNumber(20)}.<br>`);

// const textEquipment = (document.getElementById(
//     "equipment"
//   ).innerHTML = `<b>Equipment:</b> ${rosterEquipment}, ${rosterCash}.`);
