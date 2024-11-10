function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    if (words.length === 0 || s.length === 0) return result;

    const wordLength = words[0].length;
    const totalWordsLength = wordLength * words.length;

    // If the concatenation of all words is longer than the string, return an empty array
    if (totalWordsLength > s.length) return result;

    // Count each word's frequency in words array
    const wordCount: Record<string, number> = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Slide through the string in segments of `wordLength`
    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let currentCount: Record<string, number> = {};

        while (right + wordLength <= s.length) {
            const word = s.substring(right, right + wordLength);
            right += wordLength;

            if (word in wordCount) {
                currentCount[word] = (currentCount[word] || 0) + 1;

                // If there are more instances of the word than needed, move the left pointer
                while (currentCount[word] > wordCount[word]) {
                    const leftWord = s.substring(left, left + wordLength);
                    currentCount[leftWord]--;
                    left += wordLength;
                }

                // Check if we have a valid concatenation
                if (right - left === totalWordsLength) {
                    result.push(left);
                }
            } else {
                // Reset if the word is not in `words`
                currentCount = {};
                left = right;
            }
        }
    }

    return result;
}

// Example usage:
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // Output: [0, 9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // Output: []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // Output: [6, 9, 12]