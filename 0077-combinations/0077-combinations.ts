function combine(n: number, k: number): number[][] {
    const res = [];

    const backtrack = (arr = []) => {
        if (arr.length === k) {
            res.push([...arr]);
            return;
        }

        const maxNum = n - (k - arr.length - 1);
        
        for (let i = (arr[arr.length - 1] + 1) || 1; i <= maxNum; i++) {
            arr.push(i);
            backtrack(arr);
            arr.pop();
        }
    }

    backtrack();
    return res;
};