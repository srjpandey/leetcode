function minWindow(s: string, t: string): string {
    if(t.length > s.length) {
        return '';
    }

    let minSubstring = '';
    let minLength = s.length;

    const tFreqMap = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        tFreqMap.set(t[i], (tFreqMap.get(t[i]) || 0) + 1);
    }

    const need = tFreqMap.size;
    const windowFreqMap = new Map<string, number>();
    let have = 0;

    let i = 0, j = 0;
    while(j <= s.length) {
        if(have >= need) {
            if(tFreqMap.has(s[i])) {
                have -= windowFreqMap.get(s[i]) === tFreqMap.get(s[i]) ? 1 : 0;
                const val = windowFreqMap.get(s[i]) > 1 ? windowFreqMap.get(s[i]) - 1 : 0;
                windowFreqMap.set(s[i], val);
            }
            

            minSubstring = minLength >= (j - i) ? s.substring(i, j) : minSubstring;
            minLength = minSubstring.length;
            i++;
        } else {
            if(tFreqMap.has(s[j])) {
                windowFreqMap.set(s[j], (windowFreqMap.get(s[j]) || 0) + 1);
                have += windowFreqMap.get(s[j]) === tFreqMap.get(s[j]) ? 1 : 0;
            }
            j++;
        }

    }

    return minSubstring;
};