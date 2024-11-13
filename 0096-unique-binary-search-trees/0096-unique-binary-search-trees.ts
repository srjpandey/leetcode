function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function numTrees(n: number): number {

    let top = factorial(2*n);
    let right = factorial(n);
    let left = factorial(n + 1);
    let answer = Math.ceil(top / (right * left) );
    return answer;
};