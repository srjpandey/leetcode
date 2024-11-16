function getRow(rowIndex: number): number[] {
    const triangle = [];
    for (let i = 0; i <= rowIndex; i++) {
        const currentRow = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                currentRow[j] = 1;
                continue;
            }
            currentRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        }
        triangle.push(currentRow);
    }

    return triangle[rowIndex]; 
};