function stringMatching(words: string[]): string[] {
    words.sort((a, b) => b.length - a.length)
    
    const bigWords = []
    const res = []

    for(const word of words) {
        let isIncluded = false
        for(const bigWord of bigWords) {
            if(bigWord.includes(word)) {
                res.push(word)
                isIncluded = true
                break
            }
        }

        if(!isIncluded) {
            bigWords.push(word)
        }
    }

    return res
};