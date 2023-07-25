let baseValue = 100;
const basePhrase = `The base value is currently ${baseValue}.`;

let iteratorValue = 0;
let baseReducer = 10;
const iteratorPhrase = `The iterator value is ${iteratorValue} and the base value reducer is ${baseReducer}.`

const fullPhrase = document.getElementById(`full`).innerHTML = `${iteratorPhrase} <br> ${basePhrase}`

function init () {
    write = document.getElementById(`full`).innerHTML = ``;
    write = document.getElementById(`full`).innerHTML = `${iteratorPhrase} <br> ${basePhrase}`;
}

init()

const button = document.getElementById(`button`).innerHTML = `
    <button id="clicker1" onclick="clickerRoute1();clickerRouteStart()">Clicker #1</button>
    <button id="clicker2" onclick="clickerRoute2()">Clicker #2</button>
    <button id="clicker3" onclick="clickerRewriterRoute()">Rewriter Clicker</button>
`

function clickerRoute1() {
    console.log(`Before clicking, the iterator value is ${iteratorValue}`);
    iteratorValue = iteratorValue + 1;
    console.log(`After clicking, the iterator value is ${iteratorValue}`);
} 

function clickerRoute2() {
    console.log(`Before clicking, the iterator value is ${iteratorValue}`);
    iteratorValue = iteratorValue + 1;
    console.log(`After clicking, the iterator value is ${iteratorValue}`);
    clickerRouteStart();
} 

// Trouble is that I can't get the values to jump out and then back in. 

function clickerRouteStart() {
    console.log(`Route Start is working`);
    console.log(`In the Route Start, the iterator value is ${iteratorValue}`)
    document.getElementById(`full`).innerHTML = iteratorValue
    // document.getElementById(`full`).innerHTML = `${iteratorPhrase} <br> ${basePhrase}`
}

function clickerRewriterRoute() {
    console.log(`The Rewriter Clicker is working.`)
}

