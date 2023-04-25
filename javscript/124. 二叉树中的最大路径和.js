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

/**
 * 题目解读：
 * 任意数目的相连的节点（不论是否是叶子节点，根节点）之间，最大可能的的和
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER; // 最小的负整数
  const loop = root => {
    const { left, right, val } = root;
    max = Math.max(max, val);
    if (!left && !right) return val;

    const leftMax = (left ? loop(left) : 0) + val;
    const rightMax = (right ? loop(right) : 0) + val;

    max = Math.max(max, leftMax + rightMax - val, leftMax, rightMax, val);
    return Math.max(leftMax, rightMax, val); // [9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]
  };
  if (!root) return root;
  loop(root);
  return max;
};
