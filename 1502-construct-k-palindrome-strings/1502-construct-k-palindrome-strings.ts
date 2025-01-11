function canConstruct(s: string, k: number): boolean {
    let hashMap: Map<string, number> = new Map<string, number>();
    if (s.length < k)
        return false

    for (const str of s) {
        hashMap.set(str, (hashMap.get(str) || 0) + 1)
    }
    let count: number = 0;
    for (const [_, value] of hashMap.entries()) {
        if (value % 2 === 1)
            count++;
    }
    if (count > k) return false
    return true;
};