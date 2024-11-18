function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    // 1. Sorting
    const newS = s.split('')
    const newT = t.split('')
    newS.sort()
    newT.sort()
    
    return newS.join() === newT.join()

    // 2. HashMap

    const freqs = Array(26).fill(0)

    const toOrder = (char: string) => char.charCodeAt(0) - 97

    for (let i = 0; i < s.length; i += 1) {
        freqs[toOrder(s[i])] += 1
        freqs[toOrder(t[i])] -= 1
    }

    return freqs.every(freq => freq === 0)
};