/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const reverseOddLevels = function(root) {
    let current_level = 0;
    let queue = [root];
    while(queue.length){
        let size = queue.length;
        if(current_level % 2) {
            for(let i = 0; i < size/2; ++i) {
                let left = queue[i];
                let right = queue[size-1-i];
                [left.val, right.val] = [right.val, left.val];
            }
        }
        ++current_level;
        for(let i = 0; i < size; ++i) {
            let curr = queue.shift();
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
    return root;
};