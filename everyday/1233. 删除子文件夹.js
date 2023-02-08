/**
 * @param {string[]} folder
 * @return {string[]}
 */
 
var removeSubfolders = function (folder) {
  folder.sort((a, b) => a.length - b.length); // 按照长度升序
  folder = Array.from(new Set(folder)); // 去重

  const result = [];
  folder.forEach(path => {
    if (path.length > 2) {
      // 排除已经有的父元素节点
      if (!result.some(r => path.startsWith(r) && path.replace(r, "").startsWith("/"))) {
        result.push(path);
      }
    } else {
      result.push(path);
    }
  });

  return result;
};
