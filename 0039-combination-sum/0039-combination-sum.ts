function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, target: number, combination: number[]) {
        if (target === 0) {
            result.push([...combination]);
            return;
        }
        if (target < 0) return;

        for (let i = start; i < candidates.length; i++) {
            const candidate = candidates[i];
            combination.push(candidate);
            backtrack(i, target - candidate, combination);
            combination.pop();
        }
    }

    backtrack(0, target, []);
    return result;
}