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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0;
  const loop = (root, sums = []) => {
    const { left, right, val } = root;
    const newSumRoots = sums.map(c => c + val).concat([val]);
    count += newSumRoots.filter(c => c === targetSum)?.length || 0;
    if (left) loop(left, newSumRoots);
    if (right) loop(right, newSumRoots);
  };

  if (!root) return 0;
  loop(root);
  return count;
};
