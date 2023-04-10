// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

/**
 * @param {number[]} preorder root-left-right
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length && !inorder.length) return new TreeNode();
  const rootVal = preorder.shift();
  const index = inorder.indexOf(rootVal);
  const leftInList = inorder.slice(0, index);
  const leftPreList = preorder.slice(0, index);
  const rightInList = inorder.slice(index + 1, inorder.length);
  const rightPreList = preorder.slice(index);
  const node = new TreeNode();
  if (leftInList.length) node.left = buildTree(leftPreList, leftInList);
  node.val = rootVal;
  if (rightInList.length) node.right = buildTree(rightPreList, rightInList);
  return node;
};
