function setZeroes(matrix: number[][]): void {
    // Get the dimensions of the matrix
    const rows = matrix.length, cols = matrix[0].length;
    
    // Set a flag that would indicate if the 
    // first row needs to be zero or not
    let rowZero = false;

    //  Determine which rows and columns need to be zeroes
    for (let row = 0; row < rows; row ++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] == 0) {
                // Place marker on first row for the column
                matrix[0][col] = 0;

                // Place marker on first column of the row
                // if it is not the first row in which case
                // we mark using the flag we set up already
                if (row > 0) 
                    matrix[row][0] = 0;
                else
                    rowZero = true;
            }
        }
    }

    // Convert all rows except the first
    // and all columns except the first
    // to zero if they are marked as zero
    // in the first column and the first row
    for (let row = 1; row < rows; row ++)
        for (let col = 1; col < cols; col++)
            if (matrix[0][col] == 0 || matrix[row][0] == 0)
                matrix[row][col] = 0;

    // Handle the first column as 
    // tbe previous loop skipped it
    if (matrix[0][0] == 0)
        for (let row = 0; row < rows; row ++)
            matrix[row][0] = 0;

    // Handle the first row as
    // the previous loop skipped it
    if (rowZero)
        for (let col = 0; col < cols; col++)
            matrix[0][col] = 0;
};