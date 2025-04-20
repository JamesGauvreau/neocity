function letterToNumber(str, valueToLettersMap = {}) {
  const letterToValue = {};

  // Convert value-to-letters map into letter-to-value map
  for (const [value, letters] of Object.entries(valueToLettersMap)) {
    for (const letter of letters) {
      letterToValue[letter.toLowerCase()] = Number(value);
    }
  }

  const result = [];

  for (let char of str.toLowerCase()) {
    if (letterToValue[char]) {
      result.push(letterToValue[char]);
    }
  }
  let full = result;
  let sum = result.reduce((acc, val) => acc + val, 0);
  return full + " || " + sum;
}

// Example:
const customMap = {
  1: ['a', 'j', 's'],
  2: ['b', 'k', 't'],
  3: ['c', 'l', 'u'], 
  4: ['d', 'm', 'v'],
  5: ['e', 'n', 'w'],
  6: ['f', 'o', 'x'], 
  7: ['g', 'p', 'y'],
  8: ['h', 'q', 'z'],
  9: ['i', 'r'], 
};

console.log(letterToNumber("T3r3z1 Pyrop3", customMap)); 
// Output: [1, 1, 3, 3, 2, 1, 2]
