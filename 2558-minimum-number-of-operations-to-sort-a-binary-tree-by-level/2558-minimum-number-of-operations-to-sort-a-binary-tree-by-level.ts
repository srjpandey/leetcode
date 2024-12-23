/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class Node{
    data: any;
    next: Node | null;

    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class Q{
    front: Node | null;
    rear: Node | null;
    size: number;

    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data){
        const newNode = new Node(data);
        if(!this.front){
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.size++;
    }

    dequeue(){
        if(!this.front) return null;
        const removed = this.front;
        this.front = this.front.next;
        if(!this.front) this.rear = null;
        this.size--;
        return removed.data;
    }

    peek(){
        return this.front ? this.front.data : null;
    }

    isEmpty(){
        return this.size === 0;
    }
}

function minimumOperations(root: TreeNode | null): number {
    let q = new Q();
    q.enqueue(root);
    let ans = 0;

    // Get minimum number of swaps to sort the array
    const minSwaps = (elms: number[]):number => {
        let sorted = [];
        // Get the new sorted array with it's current position
        for(let i = 0; i < elms.length; i++){
            sorted.push([elms[i], i]);
        }
        sorted.sort((a, b) => a[0] - b[0]);

        let swaps = 0;
        for(let i = 0; i < sorted.length; i++){
            // Get back to it's original position and count the swaps needed
            while(sorted[i][1] !== i){
                let pos = sorted[i][1];
                [sorted[pos], sorted[i]] = [sorted[i], sorted[pos]];
                swaps++;
            }
        }

        return swaps;
    }

    // Level order traversal to get the elements level by level
    while(!q.isEmpty()){
        let size = q.size;
        let elms = [];
        for(let i = 0; i < size; i++){
            let front = q.dequeue();
            elms.push(front.val);
            if(front.left) q.enqueue(front.left);
            if(front.right) q.enqueue(front.right);
        }
        ans += minSwaps(elms);
    }

    return ans;
};