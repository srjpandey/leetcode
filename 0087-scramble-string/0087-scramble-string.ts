
function isScramble(s1: string, s2: string): boolean {
    const  map: Record<string, boolean> = {};

    const recur = (s1: string, s2: string): boolean => {
        if(s1 === s2) return true;

        if(s1.length !== s2.length) return false;

        if(s1.length === 1) return false;

        let key: string = s1 + s2;

        if(map[key] !== undefined) return map[key];

        for (let idx = 1; idx < s1.length; idx++) {
            let withoutSwap = recur(s1.substring(0, idx), s2.substring(0, idx)) && recur(s1.substring(idx), s2.substring(idx))

            if(withoutSwap) {
                map[key] = true;
                return true;
            }

            let withSwap = recur(s1.substring(idx), s2.substring(0, s2.length - idx)) && recur(s1.substring(0, idx), s2.substring(s2.length - idx));

            if(withSwap) {
                map[key] = true;
                return true;
            }
        }

        map[key] = false;
        return false;
    }

    return recur(s1, s2);
};