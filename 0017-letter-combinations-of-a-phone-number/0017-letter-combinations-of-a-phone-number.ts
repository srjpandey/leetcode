const phone: {
    [x: string]: string[]
} = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
}

function letterCombinations(digits: string): string[] {
    const combinations: string[] = []

    if(digits.length === 0){
        return []
    }

    const possibleValues: string[][] = digits.split('').map(d => phone[d])

    permutations(possibleValues, (value) => {
        if(value) combinations.push(value.join(''))
    })

    return combinations
};

function permutations(choices: string[][], cb:(v?: string[]) => void, prefix?: string[]){
    if(!choices.length) {
        return cb(prefix);
    }

    for(let c = 0; c < choices[0].length; c++) {
        permutations(choices.slice(1), cb, (prefix || []).concat(choices[0][c]));
    }
}