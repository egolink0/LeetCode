/**
 * @param {number} n
 * @return {number}
 */

const getArr = (len) => new Array(len).fill("").map((item, index) => index);

var reinitializePermutation = function (n) {
  let initPerm = getArr(n);
  let perm = [...initPerm],
    count = 0,
    isEqual = false;
  while (!isEqual) {
    count++;
    let allEqual = true;
    let i = 0;
    let arr = [];
    while (i < n) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[(n + i - 1) / 2];
      }
      if (initPerm[i] !== arr[i]) {
        allEqual = false;
      }
      i++;
    }
    if (allEqual) {
      isEqual = true;
    } else {
      perm = arr;
    }
  }
  return count;
};
