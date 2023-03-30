/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    let ancestor ;
    const find = (root, p, q) =>{
       if(ancestor) return ;
       let left,right,current;
       if(root === p || root === q) current = true;
       if(root.left) left = find(root.left,p,q);
       if(root.right) right = find(root.right,p,q);
       if(left && right) return ancestor = root; // 左右子树都是 true 
       if(current && (left || right)) return ancestor = root; // 左右子树有一个为 true ，root 为 true 
       return left || right || current; // f返回 true ，代表此节点下有匹配到的结果
    };
    find(root, p, q)
    return ancestor;
};

