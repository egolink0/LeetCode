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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const find = (root, deep = 0) => {
    if (!root) return [];
    const { left, right, val } = root;
    find(left, deep + 1);
    result[deep] = (result[deep] || []).concat([val]);
    find(right, deep + 1);
  };
  find(root, 0);
  return result;
};
