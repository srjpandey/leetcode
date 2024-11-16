/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    
      if(root === null){
        return null;
    }
    const q : Node[] = [];

    q.push(root);

    while(q.length !== 0){
  
      let size : number = q.length;

      for(let i = 0; i < size; i++){
            
            
          if(q[0].left != null){
              q.push(q[0].left);
          }
          if(q[0].right != null){
              q.push(q[0].right);
          }

          if(size - i == 1){
              let deleteNode : Node = q.shift();
              deleteNode.next = null;
          }
        else{
               let deleteNode : Node = q.shift();
            deleteNode.next = q[0];
           }
      }
    }
return root;
    };