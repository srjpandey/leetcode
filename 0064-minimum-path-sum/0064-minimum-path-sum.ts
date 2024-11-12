const DIRECTIONS = [[0, 1], [1, 0]];
function minPathSum(grid: number[][]): number {
    const visited = new Set<string>(getKey(0,0));
    const heap = new MinPriorityQueue({ priority: comparator });
    heap.enqueue([0,0,grid[0][0]]);
    while(!heap.isEmpty()){
        const [row,column,weight] = heap.dequeue().element;
        
        if(row === grid.length - 1 && column === grid[0].length - 1)
            return weight;
        
        if(visited.has(getKey(row,column))) continue;
        visited.add(getKey(row, column));
        for(const [i,j] of DIRECTIONS){
            const nextRow = row + i;
            const nextColumn = column + j;
            if(check(nextRow, nextColumn, grid, visited))
                heap.enqueue([nextRow, nextColumn, weight + grid[nextRow][nextColumn]])
        }
    }
    return 0;
};

function check(i:number, j:number, grid:number[][], visited:Set<string>){
    if(visited.has(getKey(i,j))) return false;
    try{
        if(grid[i][j] === undefined) return false;
        return true;
    }
    catch(e){
        return false;
    }
}

function comparator([,,weight]:[number,number, number])
{return weight}

function getKey(i:number, j:number){
    return `${i}-${j}`;
}