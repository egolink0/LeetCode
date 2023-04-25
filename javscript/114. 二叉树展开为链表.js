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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  const loop = root => {
    const { left, right } = root;
    let arr = [root];
    if (left) arr = arr.concat(loop(left));
    if (right) arr = arr.concat(loop(right));
    return arr;
  };

  const list = loop(root);
  for (let i = 0; i < list.length - 1; i++) {
    list[i].left = null;
    list[i].right = list[i + 1];
  }
  return list[0];
};
