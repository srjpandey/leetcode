function rob(nums: number[]): number {
    let [prev, prevp] = [0, 0];
    for (const m of nums) {
        const temp = prev;
        prev = Math.max(prevp + m, prev);
        prevp = temp;
    }
    return Math.max(prev, prevp);
};