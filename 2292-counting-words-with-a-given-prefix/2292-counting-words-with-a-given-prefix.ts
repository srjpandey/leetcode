function prefixCount(words: string[], pref: string): number {
    let count = 0

    words.find((val) => {
        if (val.startsWith(pref)) {
            count++
        }
    })
    return count
};