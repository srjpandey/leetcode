function minimumTotal(triangle: number[][]): number {
    let n = triangle.length;
    let dp = new Array(n + 1).fill(-1).map(() => Array(n + 1).fill(-1));

    return tri(n, triangle, dp, 0, 0);
};

const tri = (n:number, mat:number[][], dp:number[][], i:number, j:number ) => {
    if( i === n )return 0;
    if( dp[i][j] !== -1 )return dp[i][j];

    return dp[i][j] = Math.min( mat[i][j] + tri( n, mat, dp, i + 1, j ), mat[i][j] + tri( n, mat, dp, i + 1, j + 1 ) );
}