// TODO
// 5. Skills
// 6. Spells
// 8. Clean code

// SKILLS
// Roll randomly based on Calling.
// Remove lastmost skills if necessary.

function rollDiceInternal(number) {
  return Math.floor(Math.random() * number);
}

function rollDice(number) {
  return 1 + Math.floor(Math.random() * number);
}

let diceKind = rollDice(20); // 1d20 to determine Kind.
let diceHuman = rollDice(4); // 1d4 to determine whether a human is mutated.
let diceMutant = rollDice(4); // 1d4 to determine whether a mutant human has 1 or 2 mutations.
let diceCalling = rollDice(8); // 1d8 to determine Calling.
let diceWizard = rollDice(8); //
let diceClass = rollDice(8); // 1d8 to determine Class.
let diceEquipment = rollDice(2); // 1d2 to determine Equipment Kit.

let kindList = ["Bugbear", "Packling", "Snerson", "Human"];

let rosterKind = genKind();
let rosterCalling = 0;
let rosterClass = 0;
let rosterMutations = Mutations();
let rosterEquipment = 0;
let rosterCash = 0;

genCalling();
genClass();
genAbilities();

// KIND

function genKind() {
  // Evaluates diceKind to determine Kind.
  if (diceKind == 1) {
    return "Bugbear";
  } else if (diceKind == 2) {
    return "Packling";
  } else if (diceKind == 3) {
    return "Snerson";
  } else {
    if (diceHuman == 1) {
      return "Human";
    } else if (diceHuman == 2) {
      diceMutCommon = rollDice(4);
      if (diceMutCommon == 1) {
        return "Human (Crabhead)";
      } else if (diceMutCommon == 2) {
        return "Human (Dwarf)";
      } else if (diceMutCommon == 3) {
        return "Human (Gangle)";
      } else {
        return "Human (Orc)";
      }
    } else {
      diceMutRare = rollDice(8);
      if (diceMutRare >= 6) {
        diceMuts1 = rollDice(100);
        diceMuts2 = rollDice(100);
        textMutant = "Human (Mutations: " + diceMuts1 + ", " + diceMuts2 + ")";
        return textMutant;
      } else {
        diceMuts1 = rollDice(100);
        textMutant = "Human (Mutations: " + diceMuts1 + ")";
        return textMutant;
      }
    }
  }
}

// MUTATIONS

function Mutations() {
  if (rosterKind !== "Human") {
    let rosterMutations = "N/A";
    return rosterMutations;
  } else {
    let rosterMutations = "Human Mutant";
    return rosterMutations;
  }
}

// CALLINGS

function genCalling() {
  if (diceCalling == 8) {
    function genWizard() {
      if (diceWizard == 1) {
        return [
          (rosterCalling = "Alloy Wizard"),
          (rosterEquipment = "Wizard Equipment, gold ring"),
        ];
      } else if (diceWizard == 2) {
        return [
          (rosterCalling = "Book Wizard"),
          (rosterEquipment = "Wizard Equipment, 2 unread books"),
        ];
      } else if (diceWizard == 3) {
        return [
          (rosterCalling = "Flesh Wizard"),
          (rosterEquipment = "Wizard Equipment, 2 bottles of Mutagen Potion"),
        ];
      } else if (diceWizard == 4) {
        return [
          (rosterCalling = "Illusion Wizard"),
          (rosterEquipment =
            "Wizard Equipment, octagonal prism or rainbow-colored gloves"),
        ];
      } else if (diceWizard == 5) {
        return [
          (rosterCalling = "Kinetic Wizard"),
          (rosterEquipment =
            "Wizard Equipment, one pair of extremely tough boots"),
        ];
      } else if (diceWizard == 6) {
        return [
          (rosterCalling = "Passion Wizard"),
          (rosterEquipment = "Wizard Equipment, mood ring"),
        ];
      } else if (diceWizard == 7) {
        return [
          (rosterCalling = "Space Wizard"),
          (rosterEquipment = "Wizard Equipment, 50 ft of silk rope"),
        ];
      } else if (diceWizard == 8) {
        return [
          (rosterCalling = "Warding Wizard"),
          (rosterEquipment = "Wizard Equipment, silver key"),
        ];
      }
    }
    return [genWizard(), rosterEquipment];
  } else {
    function genNonWizard() {
      if (diceCalling == 1) {
        return (rosterCalling = "Gourmet");
      } else if (diceCalling == 2) {
        return (rosterCalling = "Hound");
      } else if (diceCalling == 3) {
        return (rosterCalling = "Intruder");
      } else if (diceCalling == 4) {
        return (rosterCalling = "Philosopher");
      } else if (diceCalling == 5) {
        return (rosterCalling = "Scoundrel");
      } else if (diceCalling == 6) {
        return (rosterCalling = "Sharptalent");
      } else if (diceCalling == 7) {
        return (rosterCalling = "Surgeon");
      }
    }
    function genEquipment() {
      if (diceEquipment === 1) {
        return (rosterEquipment = "Kit A");
      } else {
        return (rosterEquipment = "Kit B");
      }
    }
    return [
      (rosterCalling = genNonWizard()),
      (rosterEquipment = genEquipment() + ", penny knife"),
    ];
  }
}

// CLASS

function genClass() {
  if (diceClass <= 2) {
    rosterClass = "Poor";
    let cash1 = rollDice(12);
    let cash2 = rollDice(12);
    let sum = cash1 + cash2;
    rosterCash = sum + " copper pieces";
    return [rosterClass, rosterCash];
  } else if (diceClass >= 6) {
    rosterClass = "Middle Class";
    let cash1 = rollDice(8);
    let cash2 = rollDice(8);
    let sum = cash1 + cash2;
    rosterCash = sum + " silver pieces";
    return [rosterClass, rosterCash];
  } else {
    rosterClass = "Lower Class";
    let cash1 = rollDice(4);
    let cash2 = rollDice(4);
    let sum = cash1 + cash2;
    rosterCash = sum + " gold pieces";
    return [rosterClass, rosterCash];
  }
}

// ABILITY SCORES

function genAbilities() {
  function genSTR() {
    function rollTwice() {
      if (rosterKind == "Human") {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        let roll1Kind = rollDice(6);
        let roll2Kind = rollDice(6);
        let roll3Kind = rollDice(6);
        let sumKind = roll1Kind + roll2Kind + roll3Kind;
        let divisionKind = sumKind / 2;
        let rounddownKind = Math.floor(divisionKind);
        let final = Math.max(rounddown, rounddownKind);
        scoreStrength = final;
        return [scoreStrength];
      } else {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        scoreStrength = rounddown;
        return scoreStrength;
      }
    }
    rollTwice();
    return [scoreStrength];
  }
  function genDEX() {
    function rollTwice() {
      if (rosterKind == "Bugbear") {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        let roll1Kind = rollDice(6);
        let roll2Kind = rollDice(6);
        let roll3Kind = rollDice(6);
        let sumKind = roll1Kind + roll2Kind + roll3Kind;
        let divisionKind = sumKind / 2;
        let rounddownKind = Math.floor(divisionKind);
        let final = Math.max(rounddown, rounddownKind);
        scoreDexterity = final;
        return [scoreDexterity];
      } else {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        scoreDexterity = rounddown;
        return scoreDexterity;
      }
    }
    rollTwice();
    return [scoreDexterity];
  }
  function genINT() {
    function rollTwice() {
      if (rosterKind == "Packling") {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        let roll1Kind = rollDice(6);
        let roll2Kind = rollDice(6);
        let roll3Kind = rollDice(6);
        let sumKind = roll1Kind + roll2Kind + roll3Kind;
        let divisionKind = sumKind / 2;
        let rounddownKind = Math.floor(divisionKind);
        let final = Math.max(rounddown, rounddownKind);
        scoreIntelligence = final;
        return [scoreIntelligence];
      } else {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        scoreIntelligence = rounddown;
        return scoreIntelligence;
      }
    }
    rollTwice();
    return [scoreIntelligence];
  }
  function genWIS() {
    function rollTwice() {
      if (rosterKind == "Snerson") {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        let roll1Kind = rollDice(6);
        let roll2Kind = rollDice(6);
        let roll3Kind = rollDice(6);
        let sumKind = roll1Kind + roll2Kind + roll3Kind;
        let divisionKind = sumKind / 2;
        let rounddownKind = Math.floor(divisionKind);
        let final = Math.max(rounddown, rounddownKind);
        scoreWisdom = final;
        return [scoreWisdom];
      } else {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        scoreWisdom = rounddown;
        return scoreWisdom;
      }
    }
    rollTwice();
    return [scoreWisdom];
  }
  function genCHA() {
    function rollTwice() {
      if (rosterKind == "Elf") {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        let roll1Kind = rollDice(6);
        let roll2Kind = rollDice(6);
        let roll3Kind = rollDice(6);
        let sumKind = roll1Kind + roll2Kind + roll3Kind;
        let divisionKind = sumKind / 2;
        let rounddownKind = Math.floor(divisionKind);
        let final = Math.max(rounddown, rounddownKind);
        scoreCharisma = final;
        return [scoreCharisma];
      } else {
        let roll1 = rollDice(6);
        let roll2 = rollDice(6);
        let roll3 = rollDice(6);
        let sum = roll1 + roll2 + roll3;
        let division = sum / 2;
        let rounddown = Math.floor(division);
        scoreCharisma = rounddown;
        return scoreCharisma;
      }
    }
    rollTwice();
    return [scoreCharisma];
  }
  genSTR();
  genDEX();
  genINT();
  genWIS();
  genCHA();
  return [
    scoreStrength,
    scoreDexterity,
    scoreIntelligence,
    scoreWisdom,
    scoreCharisma,
  ];
}

// DERIVED SCORES

let Flesh = scoreStrength;
let Grit = Math.max(
  scoreDexterity,
  scoreIntelligence,
  scoreWisdom,
  scoreCharisma
) - 4;
let HitBonus = Math.floor(scoreDexterity / 2);
let Defense = packlingDefense();
let Speed = Math.floor((scoreStrength + scoreDexterity) / 2);
let Stealth = packlingStealth();
let Initiative = packlingInitiative();
let CarrySlots = packlingCarrySlots();
let QuickDrawSlots = checkQuickDrawSlots();
let SkillSlots = packlingSkillSlots();
let Save = scoreCharisma;
let rosterScoreKind = scoreKind();
let bodiesScore = Math.min(scoreIntelligence, scoreCharisma);

function packlingDefense() {
  if (rosterKind == "Packling") {
    Bodies = Math.min(scoreIntelligence, scoreCharisma);
    return scoreDexterity + scoreWisdom + Bodies;
  } else {
    return scoreDexterity + scoreWisdom;
  }
}

function packlingInitiative() {
  if (rosterKind == "Packling") {
    Bodies = Math.min(scoreIntelligence, scoreCharisma);
    return scoreWisdom + Bodies;
  } else {
    return scoreWisdom;
  }
}

function packlingCarrySlots() {
  if (rosterKind == "Packling") {
    Bodies = Math.min(scoreIntelligence, scoreCharisma);
    return scoreStrength + scoreIntelligence + Bodies;
  } else {
    return scoreStrength + scoreIntelligence;
  }
}

function checkQuickDrawSlots() {
  baseQuickDraw = Math.floor(scoreDexterity / 2);
  if (baseQuickDraw > CarrySlots) {
    return CarrySlots;
  } else {
    return Math.floor(scoreDexterity / 2);
  }
}

function packlingSkillSlots() {
  if (rosterKind == "Packling") {
    Bodies = Math.min(scoreIntelligence, scoreCharisma);
    return scoreIntelligence + scoreWisdom + Bodies;
  } else {
    return scoreIntelligence + scoreWisdom;
  }
}

function packlingStealth() {
  if (rosterKind == "Packling") {
    Bodies = Math.min(scoreIntelligence, scoreCharisma);
    Reduced = Math.floor(scoreDexterity - Bodies / 2);
    return Reduced;
  } else {
    return scoreDexterity;
  }
}

function scoreKind() {
  if (rosterKind == "Bugbear") {
    return "Trappings. Exact value depends on worn clothing.";
  } else if (rosterKind == "Packling") {
    Bodies = Math.min(scoreIntelligence, scoreCharisma);
    return "Bodies " + Bodies;
  } else if (rosterKind == "Snerson") {
    return "Limbs " + scoreWisdom;
  } else {
    return "None (Human)";
  }
}

const textKind = (document.getElementById(
  "kind"
).innerHTML = `<b>Kind:</b> ${rosterKind}.`);

const textCalling = (document.getElementById(
  "calling"
).innerHTML = `<b>Calling:</b> ${rosterCalling}.`);

const textClass = (document.getElementById(
  "class"
).innerHTML = `<b>Class:</b> ${rosterClass}.`);

const textAbilities = (document.getElementById(
  "abilities"
).innerHTML = `<b>Ability Scores:</b> Strength ${scoreStrength}. Dexterity ${scoreDexterity}. Intelligence ${scoreIntelligence}. Wisdom ${scoreWisdom}. Charisma ${scoreCharisma}`);

const textDerived = (document.getElementById(
  "derived"
).innerHTML = `<b>Derived Scores:</b> Flesh: ${Flesh}. Grit: ${Grit}. Hit Bonus: +${HitBonus}. Defense: ${Defense}. Speed: ${Speed}. Stealth: ${Stealth}. Initiative: ${Initiative}. Carry Slots: ${CarrySlots}. Quick Draw: ${QuickDrawSlots}. Skill Slots: ${SkillSlots}. Save: ${Save}.`);

const textSpecial = (document.getElementById(
  "special"
).innerHTML = `<b>Kind-specific Stat:</b> ${rosterScoreKind}`);

const textEquipment = (document.getElementById(
  "equipment"
).innerHTML = `<b>Equipment:</b> ${rosterEquipment}, ${rosterCash}.`);

// for dice: https://rocambille.github.io/en/2019/07/30/how-to-roll-a-dice-in-javascript/
