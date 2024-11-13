function numDecodings(s: string): number {
    let [next1, next2] = [1, 1];
    for (let i = s.length - 1; i >= 0; --i) {
        let result: number;
        if (s[i] === '0') result = 0;
        else {
            result = next1;
            if (i <= s.length - 2 && parseInt(s.substring(i, i + 2)) <= 26) 
                result += next2;
        }
        [next1, next2] = [result, next1];
    }
    return next1;
};