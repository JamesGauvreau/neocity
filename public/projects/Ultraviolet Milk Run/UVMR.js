//  ::  Stats

let cash = 10000;
let cashCommas = cash.toLocaleString(`en-US`);
const cashPhrase = `You currently have &#8353;${cashCommas} in cash.`;


    const statParagraph = document.getElementById(`stats`).innerHTML = cashPhrase;

//  TODO    Week Tracker
            // (1) Another event listener that activates upon any button click, then increments Week Counter by 1. (2) <p> in html with Week Total. "You have been operating for [x] weeks", perhaps.
//  TODO    Weekly Expenses
            // (1) <p> in html with Weekly Expenses listed. (2) Week Tracker event listener also reduces cash. 

//  ::  Options

const options = document.getElementById(`options`).innerHTML = `
        <button id="routeSafe" onclick="routeSafe()">Safe Route</button>
        <p>Small returns, but steady, and with even smaller risk.</p>
        <br>
        <button id="routeProfits" onclick="routeProfits()">Profitable Route</button>
        <p>Greater profits and greater risks.</p>
        <br>
        <button id="routeAggro" onclick="routeAggro()">Aggressive Route</button>
        <p>Possibly illegal, certainly dangerous, but with the greatest possibility of profit &mdash; or disaster.</p>
        `

function routeSafe() {
    cash = cash + (1000 * incomeSafe());
    let cashCommas = cash.toLocaleString(`en-US`);
    const cashPhrase = `You currently have ${cashCommas} cash.`;
    document.getElementById(`stats`).innerHTML = cashPhrase;
}

function routeProfits() {
    cash = cash + (1000 * incomeProfits());
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

// :: Outcomes 

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

function incomeProfits() {
    roll = Math.ceil(Math.random() * 24);
    // roll = 0;    // This is used to test specific values.
    console.log(roll);
    if (roll === 1) {
        outcome = percent(-100);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Slaver attack! Everyone sold for biomatter. 100% loss.`; // Edit
    }
    else if (roll === 2) {
        outcome = percent(-75);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Reaver attack. Half of the defenders killed. Most of the cargo taken. 75% loss.`;
    }
    else if (roll === 3) {
        outcome = percent(-50); // Edit this later. 
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Nomads block route and take goods. Caravan returned with nomads' thank-you letter. 50% loss.`;
    }
    else if (roll === 4) {
        outcome = percent(-50);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Weather and violent mechanisms catch the caravan. Drivers hid the goods and escaped with the beasts and vehicles. Potential 50% loss.`;
    }
    else if (roll === 5) {
        outcome = percent(-33);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Drivers strike out as independents. Dump cargo at a safe town. Make off with vehicles and skim profits. 33% loss.`;
    }
    else if (roll === 6) {
        outcome = percent(-25);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Special local taxes. 25% loss. Two sacks of paperwork and receipts received as "proof."`;
    }
    else if (roll === 7) {
        outcome = percent(107);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 7% profits. Interesting discovery visited. Funny iron idol brought back. Probably not possessed.`;
    }
    else if (roll === 8) {
        outcome = percent(109);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 9% profits and a letter of introduction from a fake merchant prince. Could be good for a forgery.`;
    }
    else if (roll === 9) {
        outcome = percent(111);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 11% profits. Also mineral samples from a potential mining region. Worth digging too deep?`;
    }
    else if (roll === 10) {
        outcome = percent(112);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 12% profits and some nicely patterned fabric samples. Could be a new trade good?`;
    }
    else if (roll === 11) {
        outcome = percent(114);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 14% profits and a new dice game that could be marketed with a small initial investment.`;
    }
    else if (roll === 12) {
        outcome = percent(116);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 16% profits and a small, cute pet. It's really very cute. So cute nobody could ever hurt it.`;
    }
    else if (roll === 13) {
        outcome = percent(119);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 19% profits and a new, virulent disease that cripples and embarrasses.`;
    }
    else if (roll === 14) {
        outcome = percent(120);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 20% profits and a charming potted plant of unique and baroque charm. It can talk.`;
    }
    else if (roll === 15) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 30% profits and sculptures that cause profound nausea when watched or touched.`;
    }
    else if (roll === 16) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 30% profits and some new fashions. Red suspenders and ruffled shorts here we come!`;
    }
    else if (roll === 17) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 30% profits and a trained hunting mechanism with silver eyes and iron tusks.`;
    }
    else if (roll === 18) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 30% profits and a scholar who is only half there. Promises to unlock a phase gate. Says it's safe.`;
    }
    else if (roll === 19) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 30% profits and a beautiful weapon. It talks.`;
    }
    else if (roll === 20 || roll === 21 || roll === 22 || roll === 23) {
        outcome = percent(140);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 40% profits and a holy relic. It brings nightmares and prophecies of doom. They are true.`;
    }
    else if (roll === 24) {
        outcome = percent(160);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> 60% profits and a machine human servant named Tassilo od Sharamba. They can unlock an aerolithic palace.`;
    }
    return outcome;
}

function incomeAggro() {
    roll = Math.ceil(Math.random() * 24);
    // roll = 0;    // This is used to test specific values.
    console.log(roll);
    if (roll === 1) {
        outcome = percent(-100);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Extra-dimensional incursion swallos the caravan. Everything is gone. 100% loss.`; // Edit
    }
    else if (roll === 2) {
        outcome = percent(-100);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Rival mercer guild bribed the drivers to their side with all the goods. 100% loss.`;
    }
    else if (roll === 3) {
        outcome = percent(-100); // Edit this later. 
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Ghosts possess the caravan and use it as an infection vector to take over a distant settlement. 100% loss.`;
    }
    else if (roll === 4) {
        outcome = percent(-75);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Monster attack! Sole survivor tells of horror and woe. Steeds destroyed, goods scattered round the wreckage. 75% loss.`;
    }
    else if (roll === 5) {
        outcome = percent(-75);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> Bandit attack! Most of the steeds and goods taken. 75% loss.`;
    }
    else if (roll === 6) {
        outcome = percent(-75);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> ."`;
    }
    else if (roll === 7) {
        outcome = percent(-100);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 8) {
        outcome = percent(-25);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 9) {
        outcome = percent(-25);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> `;
    }
    else if (roll === 10) {
        outcome = percent(-10);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> `;
    }
    else if (roll === 11) {
        outcome = percent(-25);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 12) {
        outcome = percent(120);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 13) {
        outcome = percent(200);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 14) {
        outcome = percent(130);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 15) {
        outcome = percent(140);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 16) {
        outcome = percent(140);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> `;
    }
    else if (roll === 17) {
        outcome = percent(150);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 18) {
        outcome = percent(160);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 19) {
        outcome = percent(170);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 20 || roll === 21 || roll === 22 || roll === 23) {
        outcome = percent(180);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    else if (roll === 24) {
        outcome = percent(220);
        document.getElementById(`outcome`).innerHTML = `<b>Outcome:</b> .`;
    }
    return outcome;
}