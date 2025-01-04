function countPalindromicSubsequence(s: string) {
    let output = 0;
    for (let code = 'a'.charCodeAt(0), end = code + 26; code < end; code++) {
        const char = String.fromCharCode(code);
        let left = s.indexOf(char);
        const right = s.lastIndexOf(char);
        const seen = new Set<string>();
        while (seen.size < 26 && ++left < right) {
            seen.add(s[left]);
        }
        output += seen.size;
    }
    return output;
}