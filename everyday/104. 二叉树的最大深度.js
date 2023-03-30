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
 * @return {number}
 */
// var maxDepth = function(root) {
//     if(!root) return 0;
//     let max = 1;
//     const loop = (root,depth=1) => {
//         if(root.left) loop(root.left,depth+1);
//         if(root.right) loop(root.right,depth+1);
//         max = Math.max(depth+1,max);
//     }
//     root.left && loop(root.left);
//     root.right && loop(root.right);
//     return max;
// };

var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
