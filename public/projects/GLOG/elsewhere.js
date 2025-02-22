// TODO
// Create elsewhere rifts.

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

const whatYouSee = [
  "Blinding aurora of colour and dancing crystals. Impossible to gauge distance",
  "A dark void lit by blue-white stars",
  "Dim view into a series of connected stone bubbles. Dim glowing red veins",
  "Looking down into a forest of white ferns and spindly orchid-like trees",
  "Irregular grid of green-blue hedges extends to the moonlit horizon",
  "Dense tangle of impossibly large ruined buildings. Columns, streets",
  "Stacked ceramic bowls the size of counties. Mercury lakes and waterfalls",
  "Lightless depression filled with smooth spheres, sliding and clattering",
  "Murky air is actually a liquid. Shimmers like oil. Floating chunks of rock",
  "A vast plain of white sand, broken by jagged black towers like dry trees",
];

const atmosphere = [
  "Dense but barely breathable. Asphyxiation in 3d6 minutes",
  "None. Painful death in 1d4 rounds",
  "Breathable but very warm and dry. Like walking into a foundry",
  "Breathable but full of spores or small creatures. May cause lung-rot",
  "Breathable but slightly lemon-scented. Cloying. Makes people sneeze",
  "Thin but breathable. Smells of burnt metal, ozone, and rotting milk",
  "Thick but breathable. Full of metallic fumes. Induces madness and disorientation",
  "Thick but breathable High moisture. Smells of burning rubber",
  "Water full of salt and iodine",
  "Thin but breathable. Smells of salt and chalk",
];

const gravityWeather = [
  "No gravity. Storms of sharp crystals oscillate up and down",
  "No gravity. Harsh unfiltered sunlight",
  "4× normal gravity. Possible to crawl, nearly impossible to stand or walk",
  "Slightly more than normal gravity. Constant rain of black hydrocarbons",
  "Normal gravity. Warm wind, wisps of high dark grey clouds",
  "Slightly less than normal gravity. Cold mildly acid rain",
  "2×normal gravity, exhausting to move or jump. Distant lightning storms",
  "Slightly less than normal gravity. Pockets with no gravity. Swirls of ash",
  "Normal but shifts directions every 1d6 minutes",
  "¾ normal gravity. Cold gusts of wind, streaks of dust.",
];

const movingThings = [
  "Entire region seems to shift and boil constantly like a stirred stew-pot",
  "Motes of dust and flakes of rock",
  "Drips of molten stone. Wire-thin lava rivers move like snakes",
  "Wounded Elsewhere Creature (1/2 HP) drifts and tumbles",
  "1d6 Elsewhere Creatures cavorting",
  "1d6 Elsewhere Creatures, at least 10× larger than normal, but in the distance",
  "1 Elsewhere Creature nearby, bathing or covering itself in some sort of fluid",
  "Terrain can crack open to reveal 2d6 Elsewhere Creatures",
  "Streams of bubbles or vacuumpockets",
  "1 Elsewhere Creature on a mindless patrol route",
];

const hazards = [
  "Sizzling thin plates of glass cut through flesh but not bone",
  "Painfully intense radiation causes nausea, blisters, and cancer",
  "Rolling burps of toxic and/or corrosive gas at ankle-height spewed from vents",
  "Fern-like bone growths colonize any unwashed wounds, grow rapidly",
  "Some surface are unexpectedly soft and sticky, can trap weapons, limbs",
  "Alarming groaning and rattling",
  "Ambushed by 2d6 rapidly moving Elsewhere Creatures after 2 minutes",
  "Intermittent high-pitched shriek drives mortal creature to their knees with pain",
  "Currents of wind, water, or invisible force move to separate explorers",
  "Hidden cracks and fissures",
];

const loot = [
  "Vorpal fragments seek blood and flesh",
  "None",
  "Gemstones as light as feathers, reflecting the sun of a distant world",
  "Blood-sap heals wounds, cures diseases",
  "Soft orbs full of impossibly powerful acid",
  "Fist-sized blue rocks that are always incredibly cold",
  "Condensed fronds of rare metals (gold, silver, possibly platinum, orichalcum)",
  "Coiled silver snail shells repeat anything spoken into them",
  "Rare twisted stone rods greatly enhance damaging spells and destructive magic",
  "Black faintly warm stone that slowly sublimates into a hallucinogenic gas",
];

function elsewhereCreature() {
  sizeRoll = d10();
  colourRoll = d10();
  soundsRoll = d10();
  movesRoll = d10();
  attacksRoll = d10();
  drawnRoll = d10();
  quality1 = sizeHDarmor[sizeRoll];
  quality2 = colourTexture[colourRoll];
  quality3 = soundsLike[soundsRoll];
  quality4 = movesLike[movesRoll];
  function elsewhereAttack() {
    if (attacksRoll === 9) {
      roll1 = d10();
      roll2 = d10();
      attack1 = attacksBy[roll1];
      attack2 = attacksBy[roll2];
      attackQuality = attack1 + " and " + attack2;
      return attackQuality;
    } else {
      attackQuality = attacksBy[attacksRoll];
      return attackQuality;
    }
  }
  quality5 = elsewhereAttack();
  quality6 = drawnTowards[drawnRoll];
  const testfunction = (document.getElementById(
    "elsewhereCreature"
  ).innerHTML = `<b>Size:</b> ${quality1}.<br><b>Colour and texture:</b> ${quality2}.<br><b>Sounds like:</b> ${quality3}.<br><b>Moves like:</b> ${quality4}.<br><b>Attacks with:</b> ${quality5}.<br><b>Drawn toward:</b> ${quality6}.`);
  return [testfunction];
}

function elsewhereRift() {
  seeRoll = d10();
  atmosRoll = d10();
  gravityRoll = d10();
  movingRoll = d10();
  hazardsRoll = d10();
  lootRoll = d10();
  quality1 = whatYouSee[seeRoll];
  quality2 = atmosphere[atmosRoll];
  quality3 = gravityWeather[gravityRoll];
  quality4 = movingThings[movingRoll];
  quality5 = hazards[hazardsRoll];
  quality6 = loot[lootRoll];
  const testfunction = (document.getElementById(
    "elsewhereRift"
  ).innerHTML = `<b>What you see:</b> ${quality1}.<br><b>Atmosphere:</b> ${quality2}.<br><b>Gravity and weather:</b> ${quality3}.<br><b>Moving things:</b> ${quality4}.<br><b>Hazards:</b> ${quality5}.<br><b>Loot:</b> ${quality6}.`);
  return [testfunction];
}

// <b></b>

const creatureGenerator = elsewhereCreature();
const riftGenerator = elsewhereRift();

function elsewhereBoth() {
  elsewhereCreature();
  elsewhereRift();
}

// elsewhereButton.onclick = elsewhereCreature;
elsewhereButton.onclick = elsewhereBoth;
