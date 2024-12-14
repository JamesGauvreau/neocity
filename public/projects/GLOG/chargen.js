// KIND Roll 1d20: 1 each per Bugbear, Packling, or Snerson. Rest are human,
// roll 1d4: if 1, no mutations; if 2, pregen mutant; else, random mutant, roll
// 1d4: if 1, 2 mutations; else, 1 mutation.

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

let diceKind = rollDice(20);

console.log('diceKind: ' + diceKind);

function genKind() {
    if (diceKind == 1) {
        return 'bugbear'
    } else {
        return 'human'
    }
}

console.log('genKind: ' + genKind())

console.log('test');
console.log(rollDiceInternal(16)); 

let testKind = kindList[rollDiceInternal(4)];

console.log(testKind);

// let mutations;

function mutantTracker() {
    if (testKind === 'Human') {
        mutations = 'Yes'
    } else {
        mutations = 'No'
    }
}

mutantTracker();

console.log(mutations);

// EQUIPMENT
// Roll starting funds
// Roll random kit: A or B
// Add penny knife 

// for dice: https://rocambille.github.io/en/2019/07/30/how-to-roll-a-dice-in-javascript/