function maxCount(banned: number[], n: number, maxSum: number): number {
    const bannedSet = new Set([...banned])
    let sum = 0, count = 0

    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) {
            continue
        }
        if (i + sum > maxSum) {
            break
        } 
        
        count++
        sum += i
    }

    return count
};