function repeatLimitedString(s: string, repeatLimit: number): string {
    const m = new Map<string, number>()
    for(const c of s) {
        m.set(c, (m.get(c) || 0) + 1)
    }

    const mems = Array.from(m)
    mems.sort((a, b) => b[0].charCodeAt(0) - a[0].charCodeAt(0))

    let first = 0
    let second = 1
    let res = ''

    while(first < mems.length) {
        if(mems[first][1] <= repeatLimit) {
            for(let j = 0; j<mems[first][1]; j+=1) {
                res += mems[first][0]
            }
            first = second
            second += 1
        } else {
            for(let j = 0; j<repeatLimit; j+=1) {
                res += mems[first][0]
            }
            mems[first][1] -= repeatLimit

            if(second >= mems.length) return res
            res += mems[second][0]
            mems[second][1] -= 1
            if(mems[second][1] === 0) second += 1
        }
    }

    return res
};