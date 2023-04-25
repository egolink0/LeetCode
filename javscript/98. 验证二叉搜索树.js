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

// 当前节点的左边直接子节点值的判断
// var isValidBST = function(root) {
//     const {left,right,val} = root;
//     const l = left ? isValidBST(left) : true;
//     const r = right ? isValidBST(right) : true;
//     const isValidCurrent = (left ? val > left.val : true) && (right ? val < right.val : true);
//     return isValidCurrent && l && r;
// };

// 当前节点所有右边的子孙节点都要比当前节点大
var isValidBST = function (root) {
  const sort = root => {
    const { left, right, val } = root;
    if (!right && !left) return [val];
    let arr = [];
    if (right) arr = arr.concat(sort(right));
    arr.unshift(val);
    if (left) arr = sort(left).concat(arr);
    return arr;
  };
  const queue = sort(root);
  for (let i = 1; i < queue.length; i++) {
    if (queue[i] <= queue[i - 1]) {
      return false;
    }
  }
  return true;
};
