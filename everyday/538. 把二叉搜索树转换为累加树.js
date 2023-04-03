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
 * @return {TreeNode}
 */
 // 记录每次的右侧最大值，只和最大值相加，每次更新
var convertBST = function (root) {
    if(!root ) return root;
  let maxRight = 0;
  var loop = function (root) {
    const { right, left, val } = root;
    if (right) loop(right);
    root.val = root.val + maxRight;
    maxRight = root.val;
    if (left) loop(left);
    return root;
  };
  return loop(root);
};
