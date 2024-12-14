// CALLING
// Roll 1d8: If wizard, roll 1d8 again.

// CLASS
// Roll as normal.

// ABILITY SCORES Roll each, then check against Kind (e.g. if Kind = "Bugbear")
// and re-roll, take highest, of one score.

// DERIVED SCORES
// As normal.
// Pick Grit from highest non-Flesh score.

// SKILLS
// Roll randomly based on Calling.
// Remove lastmost skills if necessary.

function rollDiceInternal(number) {
    return Math.floor(Math.random() * number);
}

function rollDice(number) {
    return 1+ Math.floor(Math.random() * number);
}

let kindList = [
    'Bugbear', 'Packling', 'Snerson', 'Human'
]

let diceKind = rollDice(20); // 1d20 to determine Kind. 
let diceHuman = rollDice(4); // 1d4 to determine whether a human is mutated.
let diceMutant = rollDice(4); // 1d4 to determine whether a mutant human has 1 or 2 mutations.
let diceCalling = rollDice(8); // 1d8 to determine Calling.
let diceWizard = rollDice(8); // 
let diceClass = rollDice(8); // 1d8 to determine Class. 
let diceEquipment = rollDice(2); // 1d2 to determine Equipment Kit.

let rosterEquipment = 0;

function genKind() {    // Evaluates diceKind to determine Kind. 
    if (diceKind == 1) {
        return 'Bugbear'
    } else if (diceKind == 2) {
        return 'Packling'
    }
    else if (diceKind == 3) {
        return 'Snerson'
    }
    else {
        return 'Human'
    }
}

function genHumanType() {
    if (diceHuman == 1) {
        return 'humanNorm';
    } else if (diceHuman == 2) {
        return 'humanMutCommon';
    } else {
        return 'humanMutRare';
    }
}; 

function genHumanMutRareMuts() {
    if (diceMutant == 1) {
        return '2 mutations';
    } else {
        return '1 mutation'
    }
};

rosterCalling = 0;

function genCalling() {
    if (diceCalling == 8) {
        function genWizard() {
            if (diceWizard == 1) {
                return [rosterCalling = 'Alloy Wizard', rosterEquipment = 'Wizard Equipment, gold ring']
            } else if (diceWizard == 2) {
                return [rosterCalling = 'Book Wizard', rosterEquipment = 'Wizard Equipment, 2 unread books']
            } else if (diceWizard == 3) {
                return [rosterCalling = 'Flesh Wizard', rosterEquipment = 'Wizard Equipment, 2 bottles of Mutagen Potion']
            } else if (diceWizard == 4) {
                return [rosterCalling = 'Illusion Wizard', rosterEquipment = 'Wizard Equipment, octagonal prism or rainbow-colored gloves']
            } else if (diceWizard == 5) {
                return [rosterCalling = 'Kinetic Wizard', rosterEquipment = 'Wizard Equipment, one pair of extremely tough boots']
            } else if (diceWizard == 6) {
                return [rosterCalling = 'Passion Wizard', rosterEquipment = 'Wizard Equipment, mood ring']
            } else if (diceWizard == 7) {
                return [rosterCalling = 'Space Wizard', rosterEquipment = 'Wizard Equipment, 50 ft of silk rope']
            } else if (diceWizard == 8) {
                return [rosterCalling = 'Warding Wizard', rosterEquipment = 'Wizard Equipment, silver key']
            };
        };
        return [genWizard(), rosterEquipment]
    } else {
        function genNonWizard() {
            if (diceCalling == 1) {
                return rosterCalling = 'Gourmet';
            } else if (diceCalling == 2) {
                return rosterCalling = 'Hound';
            } else if (diceCalling == 3) {
                return rosterCalling = 'Intruder';
            } else if (diceCalling == 4) {
                return rosterCalling = 'Philosopher';
            } else if (diceCalling == 5) {
                return rosterCalling = 'Scoundrel';
            } else if (diceCalling == 6) {
                return rosterCalling = 'Sharptalent';
            } else if (diceCalling == 7) {
                return rosterCalling = 'Surgeon';
            } 
        };
        function genEquipment() {
            if (diceEquipment === 1) {
                return rosterEquipment = 'Kit A'
            } else {
                return rosterEquipment = 'Kit B'
            }
        }
        return [rosterCalling = genNonWizard(), rosterEquipment = genEquipment() + ', penny knife']
    }
};

genCalling();

let rosterClass = 0;
let rosterCash = 0;

function genClass() {
    if (diceClass <= 2) {
        rosterClass = 'Poor';
        let cash1 = rollDice(12);
        let cash2 = rollDice(12);
        let sum = cash1 + cash2;
        rosterCash = sum + ' copper pieces';
        return [rosterClass, rosterCash]
    } else if (diceClass >= 6) {
        rosterClass = 'Middle Class';
        let cash1 = rollDice(8);
        let cash2 = rollDice(8);
        let sum = cash1 + cash2;
        rosterCash = sum + ' silver pieces';
        return [rosterClass, rosterCash]
    } else {
        rosterClass = 'Lower Class';
        let cash1 = rollDice(4);
        let cash2 = rollDice(4);
        let sum = cash1 + cash2;
        rosterCash = sum + ' gold pieces';
        return [rosterClass, rosterCash]
    }
}

genClass();

// function genEquipment() { // Not working properly. 
//     if (genCalling == 'Alloy Wizard' || genCalling == 'Book Wizard' || genCalling == 'Flesh Wizard' || genCalling == 'Illusion Wizard' || genCalling == 'Kinetic Wizard' || genCalling == 'Passion Wizard' || genCalling == 'Space Wizard' || genCalling == 'Warding Wizard') {
//         return 'Wizard Equipment'
//     } else {
//         return 'Non-Wizard Equipment'
//     }
// };

console.log('diceKind: ' + diceKind);
console.log('genKind: ' + genKind());
console.log('diceHuman: ' + diceHuman);
console.log('genHumanType: ' + genHumanType());
console.log('diceCalling: ' + diceCalling);
console.log('genClass: ' + rosterClass);
console.log('genCalling: ' + rosterCalling + ' | genEquipment: ' + rosterEquipment + ', ' + rosterCash);

// let mutations;

// EQUIPMENT
// Roll starting funds
// Roll random kit: A or B
// Add penny knife 

// for dice: https://rocambille.github.io/en/2019/07/30/how-to-roll-a-dice-in-javascript/