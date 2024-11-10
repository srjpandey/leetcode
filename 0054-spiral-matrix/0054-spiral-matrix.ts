function spiralOrder(matrix: number[][]): number[] {
    let  [x,y]: number[] = [0,0],
         dir: 'N'|'E'|'S'|'W' = 'E',
         xRange: number[] = [0,matrix[0].length-1],
         yRange: number[] = [1,matrix.length-1];
   const totalRecords: number = (xRange[1]+1)*(yRange[1]+1),
         output : number[] = new Array(totalRecords);

    for (let i=0; i<totalRecords;i++) {
        output[i]=matrix[y][x];
        if (i!==totalRecords-1) {
            switch (dir) {
                case 'N':
                    if (y > yRange[0]) y--;
                    else {
                        yRange[0]++;
                        dir = 'E';
                        x++;
                    }
                    break;
                case 'E':
                    if (x < xRange[1]) x++;
                    else {
                        xRange[1]--;
                        dir = 'S';
                        y++;
                    }
                    break;
                case 'S':
                    if (y < yRange[1]) y++;
                    else {
                        yRange[1]--;
                        dir = 'W';
                        x--;
                    }
                    break;
                case 'W':
                    if (x > xRange[0]) x--;
                    else {
                        xRange[0]++;
                        dir = 'N';
                        y--;
                    }
                    break;
            }
        }
    }
    return output;
};