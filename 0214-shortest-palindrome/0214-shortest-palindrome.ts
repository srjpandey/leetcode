function shortestPalindrome(s: string): string {
    const { length } = s

    const reverse = s.split('').reverse().join('')

    for(let i = 0; i < length; i++) {
        if (s.slice(0, length - i) === reverse.slice(i)) return reverse.slice(0, i) + s
    }

    return ''
};