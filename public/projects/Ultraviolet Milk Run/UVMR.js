//  ::  Stats

let cash = 10000;
let cashCommas = cash.toLocaleString(`en-US`);
const cashPhrase = `You currently have ${cashCommas} cash.`;


    const statParagraph = document.getElementById(`stats`).innerHTML = cashPhrase;

//  ::  Options

const options = document.getElementById(`options`).innerHTML = `
        <button id="routeSafe" onclick="routeSafe()">Safe Route</button>
        <p>Small returns, but steady, and with even smaller risk.</p>
        <br>
        <button id="routeProfits" onclick="routeProfits()">Profitable Route</button>
        <p>Better profits and worse risks.</p>
        <br>
        <button id="routeAggro" onclick="routeAggro()">Aggressive Route</button>
        <p>Possibly illegal, certainly dangerous, but with the greatest possibility of profit — or disaster.</p>
        `

function percent(val) {
    return val / 100;
}

function incomeSafe() {
    roll = Math.ceil(Math.random() * 24);
    // roll = 0;    // This is used to test specific values.
    console.log(roll);
    if (roll === 1) {
        outcome = percent(-100);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Drivers convert to millenarian cult. Gave all to the poor and joined a fraternity. 100% loss.`;
    }
    else if (roll === 2) {
        outcome = percent(-50);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Savage flash flood. Much cargo ruined. Gold dust found in remaining sacks. Prospect? 50%`;
    }
    else if (roll === 3) {
        outcome = percent(0); // Edit this later. 
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Local faction locks up caravan for breaking obscure custom. Will be released in 1d4 months.`;
    }
    else if (roll === 4) {
        outcome = percent(101);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 1% profit and oil paintings.`;
    }
    else if (roll === 5) {
        outcome = percent(102);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 2% profits and iridescent beetles.`;
    }
    else if (roll === 6) {
        outcome = percent(103);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 3% profits and a two-headed shrub.`;
    }
    else if (roll === 7) {
        outcome = percent(104);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 4% profits. Possible new discovery. Humorous carved-wood fetish.`;
    }
    else if (roll === 8) {
        outcome = percent(105);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 5% profits and Long Ago coins made of glass and flakes of strange metals.`;
    }
    else if (roll === 9) {
        outcome = percent(106);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 6% profits and postcards from deeper in the Ultraviolet Grasslands. The postcards imply a... buried... fan of yours? `;
    }
    else if (roll === 10) {
        outcome = percent(107);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 7% profits and a map with scribbled notes of more treasures further away.`;
    }
    else if (roll === 11) {
        outcome = percent(108);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 8% profits and a metal gastropod shell that plays Long Ago musics from an implanted vidy crystal.`;
    }
    else if (roll === 12) {
        outcome = percent(109);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 9% profits and the bones of some odd creature. A necromancer might be able to resurrect it.`;
    }
    else if (roll === 13) {
        outcome = percent(110);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 10% profits and a pet rock. The rock is cursed and will not leave. Still, it is a friendly (if personally unlucky) rock. It likes to be held. It is labeled "Pickles." Its accidental, tragic destruction is written in the stars.`;
    }
    else if (roll === 14) {
        outcome = percent(111);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 11% profits and some pickled mushrooms. One of the mushrooms is actually a violent mechanism from Long Ago.`;
    }
    else if (roll === 15) {
        outcome = percent(112);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 12% profits and a dutiful little mechanical servant. It can learn any skill. It can remember one skill.`;
    }
    else if (roll === 16) {
        outcome = percent(113);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 13% profits and a sack of ugly shoes — easy to clean and water-resistant.`;
    }
    else if (roll === 17) {
        outcome = percent(114);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 14% profits and a kitschy replica of a monolith with spring-activated altar and prayer-action.`;
    }
    else if (roll === 18) {
        outcome = percent(115);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 15% profits and a small troupe of hairless monkeys with shocking rainbow manes.`;
    }
    else if (roll === 19) {
        outcome = percent(118);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 18% profits and a traditional bone war club. It bears a map to a...Lost World theme-realm?.`;
    }
    else if (roll === 20 || roll === 21 || roll === 22 || roll === 23) {
        outcome = percent(120);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 20% profits and an overlong epic tale of a voyage of self-discovery.`;
    }
    else if (roll === 24) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 30% profits and a free 99-year lease on a nice retirement bungalow in a Metropolitan suburb. Don't ask what your agent had to do to get that.`;
    }
    return outcome;
}

function routeSafe() {
    cash = cash + (1000 * incomeSafe());
    let cashCommas = cash.toLocaleString(`en-US`);
    const cashPhrase = `You currently have ${cashCommas} cash.`;
    document.getElementById(`stats`).innerHTML = cashPhrase;
}

function routeProfits() {
    cash = cash + 100;
    let cashCommas = cash.toLocaleString(`en-US`);
    const cashPhrase = `You currently have ${cashCommas} cash.`;
    document.getElementById(`stats`).innerHTML = cashPhrase;
}

function routeAggro() {
    cash = cash + 100;
    let cashCommas = cash.toLocaleString(`en-US`);
    const cashPhrase = `You currently have ${cashCommas} cash.`;
    document.getElementById(`stats`).innerHTML = cashPhrase;
}