function rotate(matrix: number[][]): void {
    const n = matrix.length - 1;
    for(let i = 0; i < Math.floor(matrix.length / 2) + matrix.length % 2; i++){
        for(let j = 0; j < Math.floor(matrix.length / 2); j++){
            [matrix[i][j], matrix[j][n - i], matrix[n - i][n - j], matrix[n - j][i]] = 
            [matrix[n - j][i], matrix[i][j], matrix[j][n - i], matrix[n - i][n - j]];
        }
    }
};