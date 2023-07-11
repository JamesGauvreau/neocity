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

console.log(`TB Group 1 = ${testBox.testGroup1[1]} & TB Group 2 = ${testBox.testGroup2[0]}`)

let mathTest = Math.random()
console.log(mathTest)

const minceGenerator = document.getElementById(`dog`)
const text = document.createTextNode(minceFat);

minceGenerator.appendChild(text);

// small intestines eaten like noodles