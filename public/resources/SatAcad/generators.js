// Minceloaves and other rations

const minceFat = [
    `olives`,
    `tallow`, 
    `marrow`, // obtained by boiling bones
]

const minceProtein = [
    `beans`,
    `cheese`,
    `duck`,
    `fish`, // especially oily fish
    `insect meal`,
    `nuts`,
    `oat and pea flour`,
]

const minceFruit = [
    `cherries`,
    `chili peppers`, //high in vitamin c
    `mushrooms`, // umami flavor
    `rose hips`,
    `strawberries`,
]

const minceOther = [
    `eggs`,
    `thyme`, //high in vitamin c
]

let testBox = {
    "testGroup1": [`one`, 'two', `three`],
    "testGroup2": [`a`, `b`, `c`] 
    }

// Names
const consonants = {
    "consA": ['H', 'Q', 'R', 'W', 'K', 'G', 'Kh', 'Gh'],
    "consB": ['Th', 'Dh', 'L', 'Sh', 'J', 'S', 'F'],
    "consC": ['P', 'T', 'M', 'N', 'B', 'D']
}

const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

const makeDoublet = () => {
    let conSelectGroup = Math.floor(Math.random() * 3);
    // let conGroup = consonants.conSelectGroup;
    let conTest = `${consonants.consA[conSelectGroup]}`;
    let conSelectLetter = Math.floor(Math.floor() * 6); // Adjust this later
    // let conLetter = `${consonants.consA[conSelectLetter]}`;
    // let vowelSelect =  Math.floor(Math.random() * 6);
    // let pair = `${conSelect} ${vowelSelect}`;
    // return pair;
    return conTest; 
}

makeDoublet()
console.log(makeDoublet())
// Other

console.log(`TB Group 1 = ${testBox.testGroup1[1]} & TB Group 2 = ${testBox.testGroup2[0]}`)

// Functions

let mathRan = Math.random() * 3;
let mathRan2 = Math.random() * 3;
let mathTest = Math.floor(mathRan)
let mathTest2 = Math.floor(mathRan2)
console.log(mathTest)
console.log(mathTest2)

const minceGenerator = document.getElementById(`dog`)
const textMince = document.createTextNode(minceFat);

minceGenerator.appendChild(textMince);
nameGenerator.appendChild();

// small intestines eaten like noodles