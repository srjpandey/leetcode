function generateParenthesis(n: number): string[] {
    const res = [];
    backtrack(res, '', 0, 0, n);
    return res;
}

function backtrack(res: string[], cur: string, open: number, close: number, max: number) {
    if (cur.length == max * 2) {
        res.push(cur);
        return;
    }
    if (open < max)
        backtrack(res, cur + '(', open + 1, close, max);
    if (close < open)
        backtrack(res, cur + ')', open, close + 1, max);
}