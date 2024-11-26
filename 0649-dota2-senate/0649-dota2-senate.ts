function predictPartyVictory(senate: string): string {
    const rQueue = []
    const dQueue = []
    const N = senate.length

    for (let i = 0; i < N; i++) {
        if (senate[i] === 'R') rQueue.push(i)
        else dQueue.push(i)
    }

    while (rQueue.length && dQueue.length) {
        const rVal = rQueue.shift()
        const dVal = dQueue.shift()
        if (rVal < dVal) {
            rQueue.push(rVal + N)
        } else {
            dQueue.push(dVal + N)
        }
    }

    return rQueue.length ? 'Radiant' : 'Dire'
};