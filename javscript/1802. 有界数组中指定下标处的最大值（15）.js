const calcLangth = (start, length) => {
  if (length === 1) return start;
  if (length <= start) return (length * (start - (length - 1) + start)) / 2;
  return (start * (start + 1)) / 2 + length - start;
};

const calcSum = (n, index, mid) => {
  let sum = 0;
  if (index !== 0) {
    const length = index;
    sum += calcLangth(mid - 1, length);
  }
  if (index !== n - 1) {
    const length = n - index - 1;
    sum += calcLangth(mid - 1, length);
  }
  sum += mid;
  return sum;
};

const getCorrectMid = (max, min, minSum, maxSum, calc) => {
  const mid = Math.floor((max + min) / 2);
  const res = calc(mid);
  console.log("mid--", max, min, mid, calc(max), res);

  if (max > min) {
    if (max - min === 1) {
      return calc(max) > maxSum ? min : max;
    } else {
      max = res > maxSum ? mid : max;
      min = res <= maxSum ? mid : min;
    }
    return getCorrectMid(max, min, minSum, maxSum, calc);
  } else {
    return mid;
  }
};

const maxValue = function (n, index, maxSum) {
  const calc = (mid) => calcSum(n, index, mid);
  return getCorrectMid(maxSum, 1, 0, maxSum, calc);
};

// console.log("res--1, 0, 24--:", maxValue(1, 0, 24));
// console.log("res--4, 2, 6--2:", maxValue(4, 2, 6));
// console.log("res--9, 3, 16--3:", maxValue(9, 3, 16));
// console.log("res--6,1,10--3:", maxValue(6, 1, 10));
// console.log("res--9, 3, 16--3:", maxValue(8257285, 4828516, 850015631));
