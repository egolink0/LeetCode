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
// 此解法左右子树是否可以是 copy 的副本，题目要求轴对称，不符合
// var isSymmetric = function (root) {
//   if (!root) return true;
//   const compare = (r1, r2) => {
//     if ((r1 && !r2) || (r2 && !r1)) return false;
//     if (!r1 && !r2) return true;

//     const { left: left1, right: right1, val: val1 } = r1;
//     const { left: left2, right: right2, val: val2 } = r2;

//     const isEqualVal = val1 === val2;
//     const isEqualLeft = compare(left1, left2);
//     const isEqualRight = compare(right1, right2);
//     return isEqualVal && isEqualLeft && isEqualRight;
//   };
//   return compare(root.left, root.right);
// };

// 轴对称，左子树前序遍历，右子树后序遍历，看二者是否一致 ,null 需要特殊判断
var isSymmetric = function (root) {
  if (!root) return true;
  const compare = (r1, r2) => {
    if (r1 === r2 && r1 === null) return true;
    if (r1 === null && r2 !== null) return false;
    if (r2 === null && r1 !== null) return false;

    const { left: left1, right: right1, val: val1 } = r1;
    const { left: left2, right: right2, val: val2 } = r2;
    return compare(left1, right2) && compare(left2, right1) && val1 === val2;
  };
  return compare(root.left, root.right);
};
