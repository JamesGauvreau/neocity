let yearCurrent = 1;

const innovations = [
    {
        title: "Miles' Moving Miracles",
        value: 1,
        disrupted: true,
    },
    {
        title: "Room to Live",
        value: 1,
        disrupted: true,
    },
    {
        title: "A World Without Roads",
        value: 1,
        disrupted: true,
    },
    {
        title: "True Polymorph",
        value: 1,
        disrupted: true,
    },
    {
        title: "A Peaceful City",
        value: 1,
        disrupted: true,
    },
    {
        title: "Conjured Workforce",
        value: 1,
        disrupted: true,
    },
    {
        title: "Coal & Iron",
        value: 1,
        disrupted: false,
    },
    {
        title: "The Power of Creation",
        value: 1,
        disrupted: true,
    }
];

console.log(innovations[0].title)

function roll1d(number) {
    return Math.floor(Math.random() * number) + 1;
}

function rollForInnovation() {
    let result = [];  // Use an array to store the results
    let set1 = `Year ${yearCurrent}: ${innovations[0].title} (${innovations[0].value}). ${innovations[1].title} (${innovations[1].value}). ${innovations[2].title} (${innovations[2].value}). ${innovations[3].title} (${innovations[3].value}). ${innovations[4].title} (${innovations[4].value}). ${innovations[5].title} (${innovations[5].value}). ${innovations[6].title} (${innovations[6].value}). ${innovations[7].title} (${innovations[7].value}). ${innovations[7].disrupted}.`;
    let allValues = [innovations[0].value, innovations[1].value, innovations[2].value, innovations[3].value, innovations[4].value, innovations[5].value, innovations[6].value, innovations[7].value];
    // result.push(set1 + "\n" + Math.max(...allValues));  // Add the first year to the result
    result.push(set1 + "\n")

    // Loop until innoMMM.value is 6 or greater
    while (Math.max(...allValues) < 6) {
        yearCurrent += 1;  // Increment the year
        // let rolls = [] // ← build something that can keep track of the previous rolls. 
        let rolls = [roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6)];
        let rollsBad = [roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6), roll1d(6)];

        // NOTE
        // Really don't need to record the numbers for posterity, just whether the numbers were sufficient for advancement. 

        // If the roll is greater than innoMMM.value, increment the value
        for (let i = 0; i < innovations.length; i++) {
            if (innovations[i].disrupted === true && innovations[i].value > 1) {
                if (innovations[i].value < rolls[i] && innovations[i].value < rollsBad[i]) {
                    innovations[i].disrupted = false;
                    innovations[i].value += 1;
                } else {
                    if (innovations[i].value < rolls[i]) {
                        innovations[i].value += 1;
                    }
                }
            } else {
                if (innovations[i].value < rolls[i]) {
                    innovations[i].value += 1;
                }
            }
            // if (innovations[i].value < rolls[i]) {
            //     innovations[i].value += 1;
            // }
        }

        // Update allValues array

        // Prepare the new set for this year
        let set2 = `Year ${yearCurrent}: ${innovations[0].title} (${innovations[0].value}). ${innovations[1].title} (${innovations[1].value}). ${innovations[2].title} (${innovations[2].value}). ${innovations[3].title} (${innovations[3].value}). ${innovations[4].title} (${innovations[4].value}). ${innovations[5].title} (${innovations[5].value}). ${innovations[6].title} (${innovations[6].value}). ${innovations[7].title} (${innovations[7].value}).  ${innovations[7].disrupted}. Rolls: ${rolls}. Disrupted Rolls: ${rollsBad}.`;
        result.push(set2 + "\n");  // Add the new year to the result
        allValues = [innovations[0].value, innovations[1].value, innovations[2].value, innovations[3].value, innovations[4].value, innovations[5].value, innovations[6].value, innovations[7].value];
    }

    // Join the array into a single string and return the result
    return result.join('');
}

console.log(rollForInnovation());