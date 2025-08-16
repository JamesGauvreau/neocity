// Generate all arrangements of "nimrod" letters following CVCCVC or CVCVCC patterns

function generateArrangements() {
    const letters = ['n', 'i', 'm', 'r', 'o', 'd'];
    const vowels = ['i', 'o'];
    const consonants = ['n', 'm', 'r', 'd'];
    
    // Generate all permutations of the letters
    function getPermutations(arr) {
        if (arr.length <= 1) return [arr];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            const perms = getPermutations(remaining);
            for (const perm of perms) {
                result.push([current, ...perm]);
            }
        }
        return result;
    }
    
    // Check if a word matches CVCCVC pattern
    function matchesCVCCVC(word) {
        return consonants.includes(word[0]) &&
               vowels.includes(word[1]) &&
               consonants.includes(word[2]) &&
               consonants.includes(word[3]) &&
               vowels.includes(word[4]) &&
               consonants.includes(word[5]);
    }
    
    // Check if a word matches CVCVCC pattern
    function matchesCVCVCC(word) {
        return consonants.includes(word[0]) &&
               vowels.includes(word[1]) &&
               consonants.includes(word[2]) &&
               vowels.includes(word[3]) &&
               consonants.includes(word[4]) &&
               consonants.includes(word[5]);
    }
    
    // Get all permutations and filter by patterns
    const allPermutations = getPermutations(letters);
    const cvccvcWords = [];
    const cvcvccWords = [];
    
    for (const perm of allPermutations) {
        const word = perm.join('');
        if (matchesCVCCVC(word)) {
            cvccvcWords.push(word);
        } else if (matchesCVCVCC(word)) {
            cvcvccWords.push(word);
        }
    }
    
    // Sort alphabetically
    cvccvcWords.sort();
    cvcvccWords.sort();
    
    // Output results
    console.log('='.repeat(50));
    console.log('ARRANGEMENTS OF "NIMROD" LETTERS');
    console.log('='.repeat(50));
    
    console.log('\nCVCCVC Pattern (' + cvccvcWords.length + ' arrangements):');
    console.log('-'.repeat(30));
    cvccvcWords.forEach((word, index) => {
        console.log((index + 1).toString().padStart(2) + '. ' + word);
    });
    
    console.log('\nCVCVCC Pattern (' + cvcvccWords.length + ' arrangements):');
    console.log('-'.repeat(30));
    cvcvccWords.forEach((word, index) => {
        console.log((index + 1).toString().padStart(2) + '. ' + word);
    });
    
    console.log('\nTotal valid arrangements: ' + (cvccvcWords.length + cvcvccWords.length));
    console.log('='.repeat(50));
    
    return {
        cvccvc: cvccvcWords,
        cvcvcc: cvcvccWords
    };
}

// Run the program
generateArrangements();

console.log(generateArrangements())