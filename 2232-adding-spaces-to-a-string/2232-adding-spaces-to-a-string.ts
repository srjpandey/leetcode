function addSpaces(s: string, spaces: number[]): string {
    let p = 0
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[p]) {
            res += ' '
            p++
        }
        res += s[i]
    }
    return res
};