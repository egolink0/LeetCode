// 获取所有可能性的密码答案
const getAllPossiblePassword = (n, k) => {
  let arr = [];
  let i = 0;
  while (i < n) {
    const curLevelResult = [];
    for (let m = 0; m < k; m++) {
      if (!arr.length) {
        curLevelResult.push(`${m}`);
      } else {
        arr.forEach((prev) => {
          curLevelResult.push(`${prev}${m}`);
        });
      }
    }
    arr = curLevelResult;
    i++;
  }
  return arr;
};

// 获取剩余答案中，相同前缀，最后一位最大的数；
const getMaxFirstString = (list, prefix) => {
  let resMax = -1;
  list.forEach((item) => {
    if (item.startsWith(prefix)) {
      const first = item.slice(prefix.length, prefix.length + 1);
      resMax = Math.max(resMax, Number(first));
    }
  });
  return resMax;
};

// 移除数组中指定的元素，修改原数组
const findAndRemoveArr = (list, str) => {
  let index = -1;
  list.find((item, i) => {
    if (item === str) {
      index = i;
      return true;
    } else {
      return false;
    }
  });
  if (index > 0) {
    list.splice(index, 1);
  }
};

// 获取最后一位最大的秘钥，作为起点
const begin = (n, k) => {
  let res = `${k - 1}`;
  while (res.length < n) {
    res = `${0}${res}`;
  }
  return res;
};

// 获取 从 0 开始到 k 的元素集合 字符串
const getReduceString = (k) => {
  let res = ``;
  while (res.length < k) {
    res += `${res.length}`;
  }
  return res;
};

const crackSafe = (n, k) => {
  if (k === 1) return new Array(n).fill("0").join("");
  if (n === 1) return getReduceString(k);
  const list = getAllPossiblePassword(n, k);
  let result = begin(n, k);
  findAndRemoveArr(list, result);

  let count = 0;
  while (count < 10 && list.length) {
    const prefix = result.slice(result.length - (n - 1));
    const restMax = getMaxFirstString(list, prefix);
    result += restMax;
    const lastPw = result.slice(result.length - n, result.length);
    findAndRemoveArr(list, lastPw);
    if (list.length === 1) {
      result += list[0].slice(n - 1);
      list.pop();
    }
  }
  return result;
};

// 待优化，从时间或者空间上
