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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const { left, right } = root;
  let list = [];
  if (left) list = list.concat(inorderTraversal(left));
  list = list.concat([root.val]);
  if (right) list = list.concat(inorderTraversal(right));
  return list;
};
