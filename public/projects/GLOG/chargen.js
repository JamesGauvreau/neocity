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

let diceKind = rollDice(20); // Rolls 1d20 to determine Kind. 



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

let diceHuman = rollDice(4); // Rolls 1d4 to determine whether a human is mutated. 

function genHumanType() {
    if (diceHuman == 1) {
        return 'humanNorm';
    } else if (diceHuman == 2) {
        return 'humanMutCommon';
    } else {
        return 'humanMutRare';
    }
}

let diceMutant = rollDice(4); // Rolls 1d4 to determine whether a mutant human has 1 or 2 mutations.

function genHumanMutRareMuts() {
    if (diceMutant == 1) {
        return '2 mutations';
    } else {
        return '1 mutation'
    }
}

genHumanType()

console.log('diceKind: ' + diceKind);
console.log('genKind: ' + genKind());
console.log('diceHuman: ' + diceHuman);
console.log('genHumanType: ' + genHumanType());

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