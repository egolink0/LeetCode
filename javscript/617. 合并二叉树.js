/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 将 root2 的值赋值给 root1
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  const { left: left1, right: right1, val: val1 } = root1;
  const { left: left2, right: right2, val: val2 } = root2;

  root1.val = (val1 || 0) + (val2 || 0);
  if (left1 && left2) root1.left = mergeTrees(left1, left2);
  else if (left2 && !left1) root1.left = left2;

  if (right1 && right2) root1.right = mergeTrees(right1, right2);
  else if (right2 && !right1) root1.right = right2;

  return root1;
};

// 示例：创建新的 node
// var mergeTrees = (root1, root2) => {
//   if (!root1) return root2;
//   if (!root2) return root1;

//   const val = root1.val + root2.val;
//   const node = new TreeNode(val);
//   node.left = mergeTrees(root1.left, root2.left);
//   node.right = mergeTrees(root1.right, root2.right);
//   return node;
// };
