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

var rob = function(root) {
    const memoSelect = new Map();
    const memoUnSelect = new Map();

    const select = (root) =>{
        if(memoSelect.get(root)) return memoSelect.get(root);
        let res = 0;
        if(!root) res= 0;
        else if(!root.left && !root.right) res =  root.val;
        else res = root.val + unSelect(root.left) + unSelect(root.right);
        memoSelect.set(root,res);
        return res;
    };

    const unSelect = (root) =>{
         if(memoUnSelect.get(root)) return memoUnSelect.get(root);
        let res = 0;
        if(!root) res= 0;
        else if(!root.left && !root.right) res =  0;
        else res =  Math.max(select(root.left),unSelect(root.left)) + Math.max(select(root.right),unSelect(root.right));
        memoUnSelect.set(root,res);
        return res;
    };
    return Math.max(select(root),unSelect(root)) ;
};
