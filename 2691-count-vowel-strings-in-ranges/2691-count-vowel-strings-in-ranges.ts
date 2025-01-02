function vowelStrings(words: string[], queries: number[][]): number[] {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n: number = words.length;

    let arr: number[] = new Array(n + 1).fill(0);

    for(let i = 0; i < n; i++) {
        let word: string = words[i];

        if(vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
            arr[i + 1] = arr[i] + 1;
        }
        else {
            arr[i + 1] = arr[i];
        }
    }

    let ans: number[] = [];

    for(const [le, ri] of queries) {
        ans.push(arr[ri + 1] - arr[le])
    }

    return ans;
};