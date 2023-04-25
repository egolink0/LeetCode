/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  let res = 0;
  amount = amount.filter(a => !!a); // 去掉0
  while (amount.length) {
    amount.sort((a, b) => b - a); // 降序
    if (amount.length >= 2) {
      res += 1;
      amount[0] -= 1;
      amount[1] -= 1;
      amount = amount.filter(item => !!item);
    } else {
      res += amount[0];
      amount.pop();
    }
  }
  return res;
};
