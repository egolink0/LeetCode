/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isLeaf = (node) => [0,1].includes(node);

var evaluateTree = function(root) {
    
    const {left,val,right} = root;
    if(isLeaf(val)) return val;

    if(!isLeaf(left.val)){
        left.val = evaluateTree(left);
    }
    if(!isLeaf(right.val)){
        right.val = evaluateTree(right);
    }
    return val === 2 ? (left.val||right.val) : (left.val && right.val);
};
