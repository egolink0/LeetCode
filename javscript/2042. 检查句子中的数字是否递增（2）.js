var areNumbersAscending = function (s) {
  const arr = s.split(" ");
  let lastNum;
  for (let item of arr) {
    const n = Number(item);
    if (!isNaN(n)) {
      if (lastNum !== undefined && n <= lastNum) return false;
      lastNum = n;
    }
  }
  return true;
};
