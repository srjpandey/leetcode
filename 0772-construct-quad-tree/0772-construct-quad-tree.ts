/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
    // recusively divide the nodes into 4
    // topleft, topright, bottomleft, bottomright

    return helper(0, grid.length, 0, grid.length);

    function helper(startRow: number, endRow: number, startCol: number, endCol: number): Node {
        if(isLeafGrid(startRow, endRow, startCol, endCol)){
             return new Node(Boolean(grid[startRow][startCol]), true);
        }

        const midRow: number = Math.floor((startRow+endRow)/2);
        const midCol: number = Math.floor((startCol+endCol)/2);
        

        const topLeft: Node = helper(startRow, midRow, startCol, midCol);
        const topRight: Node = helper(startRow, midRow, midCol, endCol);
        const bottomLeft: Node = helper(midRow, endRow, startCol, midCol);
        const bottomRight: Node = helper(midRow, endRow, midCol, endCol);

        const node: Node = new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);

        return node;
    }

    function isLeafGrid(startRow: number, endRow: number, startCol: number, endCol: number): boolean {
        const set: Set<number> = new Set();

        for(let i = startRow; i < endRow; i++){
            for(let j = startCol; j < endCol; j++){
                set.add(grid[i][j]);
                if(set.size > 1){
                    return false;
                }
            }
        }

        return true;
    }
};