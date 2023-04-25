/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = {};
  items1.concat(items2).forEach(item => {
    const [k, v] = item;
    map[k] = (map[k] || 0) + v;
  });
  return Object.entries(map).sort((a, b) => a[0] - b[0]);
};
