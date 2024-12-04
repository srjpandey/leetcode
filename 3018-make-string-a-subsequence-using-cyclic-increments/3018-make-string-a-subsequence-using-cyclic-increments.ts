function canMakeSubsequence(str1: string, str2: string): boolean {
    let i = 0;
    for (let j = 0; j < str1.length; j++) {
        if (str1[j] === str2[i]) {
            i++;
        } else {
            const nextChar = String.fromCharCode((str1.charCodeAt(j) - 97 + 1) % 26 + 97);
            if (nextChar === str2[i]) {
                i++
            }
        }
        if (i === str2.length) {
            return true;
        }
    }
    return false;
};