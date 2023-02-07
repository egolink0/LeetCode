/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */

const transferTime = time => {
  const [h, m] = time.split(":");
  return Number(h) * 60 + Number(m);
};

const hasOverThree = list => {
  for (let i = 0; i < list.length - 2; i++) {
    if (list[i] <= list[i + 1] && list[i + 1] <= list[i + 2] && list[i + 2] - list[i] <= 60) {
      return true;
    }
  }
};

// 所给员工的时间是一天之内的
// 时间是乱序的
var alertNames = function (keyName, keyTime) {
  const map = {};
  const res = [];
  for (let i = 0; i < keyName.length; i++) {
    const name = keyName[i];
    if (res.includes(name)) continue;

    const time = transferTime(keyTime[i]);
    const timeList = map[name] || [];
    timeList.push(time);
    // 此处的排序可优化为每次插入
    timeList.sort((a, b) => a - b);
    if (timeList.length >= 3 && hasOverThree(timeList)) {
      res.push(name);
    } else {
      map[name] = timeList;
    }
  }
  res.sort();
  return res;
};
