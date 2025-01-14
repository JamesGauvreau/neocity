function d10() {
  return Math.floor(Math.random() * 10);
}

const sizeHDarmor = [
  "A rotting vole (0HD, 1 HP, armour as plate)",
  "A squashed cabbage (1 HD, 5 HP, armour as plate)",
  "A heap of shredded furniture (2 HD, 9 HP, armour as chain)",
  "A dying horse (3 HD, 15 HP, armour as chain)",
  "A greasy cookstove (4 HD, 18 HP, armour as leather)",
  "A smashed carriage (5 HD, 23 HP, armour as leather)",
  "A boiled elephant (10 HD, 45 HP, no armour)",
  "A house (20 HD, 90 HP, no armour)",
  "A coin (0 HD, 1 HP, armour as plate)",
  "A sheet, as a 2D plane that is invisible side-on (3 HD, 15 HP, armour as chain)",
];

const colourTexture = [
  "Stained glass, translucent and delicate",
  "Tangled metal, rusting, leaking oil",
  "Carved ivory or soapstone, glistening ",
  "Sharp outline but no interior. A cut-out",
  "Stacked plates or scales, smooth",
  "Moth wings, powdery, dry",
  "Wet flesh, fine hairs, grey veins",
  "Oil-slick rainbow, flashing, glowing",
  "Grey ash mixed with glass marbles",
  "Cold brown earth, wet, crumbling",
];

const soundsLike = [
  "An upturned beehive, buzzing furiously",
  "Dead silence, seems to swallow other sounds",
  "Muttering voices, chewing, licking lips, spitting",
  "Grinding gears and shrieking metal",
  "Ice squeaking, nails on a chalkboard",
  "Irregular wheezing, like a punctured lung",
  "Thousands of scissors cutting silk. Susurration",
  "A single bass note. Hits in the diaphragm",
  "High-pressure scream, like a kettle",
  "An orchestra tuning. Warbles, scratches, honks",
];

const movesLike = [
  "A stop-motion film. Jerks and leaps",
  "Blood or wax, dripping, oozing",
  "A bird with a broken wing, careening",
  "Foam, rising, expanding, sizzling",
  "Boiling mud, wetly flapping",
  "Mercury, sliding with weight",
  "A drunkard, toppling, staggering",
  "Grass waving in the wind, smooth",
  "Fire, racing upwards in peaks",
  "Breaking glass or bones",
];

const attacksBy = [
  "Bumping slowly into things (No damage)",
  "Slamming whip-like protrusions (HD # of melee attacks, 1d10 damage)",
  "Spitting ball lightning (30' line, 2d6 lightning damage)",
  "Flailing mirrored limbs around its body (1d6 melee attacks, 1d6 damage)",
  "Hissing sprays of blue-green flame (30' cone, 2d6 fire damage, Save for half)",
  "Needle-sharp spikes of glass and ice (1 melee attack, 1d8+2 damage)",
  "Fluorescent whips of liquid (1d6 attacks, 10' range, 1 damage)",
  "Jets of stinking steam (30' cube, 1 damage, blocks line of sight)",
  "Hideous roaring energy beam (HD×10' line, HD×1d6 damage)",
  "Roll again twice, combing effects",
];

const drawnTowards = [
  "Concentrations of metal, worked or unrefined",
  "Bright colours, mirrors, and glass",
  "Blood or old wounds, as if in sympathy",
  "Triangles, points, swords, and needles",
  "Noise, music, raucous conversation",
  "Feathers, fur, tassels, and detailed textures",
  "Local extremes of cold, heat, or wind",
  "Rings, loops, knots, writing, or eyes",
  "Rapid movement or enforced stillness",
  "Eye contact, attention, thought, analysis",
];

const whatYouSee = ["", "", "", "", "", "", "", "", "", ""];

const atmosphere = ["", "", "", "", "", "", "", "", "", ""];

const gravityWeather = ["", "", "", "", "", "", "", "", "", ""];

const movingThings = ["", "", "", "", "", "", "", "", "", ""];

const hazards = ["", "", "", "", "", "", "", "", "", ""];

const loot = ["", "", "", "", "", "", "", "", "", ""];

function elsewhereCreature() {
  sizeRoll = d10();
  colourRoll = d10();
  soundsRoll = d10();
  movesRoll = d10();
  attacksRoll = d10();
  drawnRoll = d10();
}
