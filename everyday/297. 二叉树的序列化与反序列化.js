/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 官方解答：
// root 是个对象，对对象用 JSON.stringify 序列化，然后再反过来 parse 就可以
// 也可以自己实现 JSON 的两个方法
// 这里，我用的是中序遍历组成字符串，然后反推补全的方式
var serialize = function (root) {
  if (!root) return "";
  const { left, right, val } = root;
  let str = "";
  str += `${val}`;
  str += `,${left ? serialize(left) : "$"}`; // $ === null
  str += `,${right ? serialize(right) : "$"}`;
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const list = data.split(",");

  const loop = list => {
    if (!list.length) return;

    const val = list.shift();
    if (val === "$") return null;

    const root = new TreeNode();
    root.val = Number(val);
    root.left = loop(list) || null;
    root.right = loop(list) || null;

    return root;
  };

  return loop(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
