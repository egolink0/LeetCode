var countEven = function (num) {
  let count = 0;
  let i = 1;
  while (i <= num) {
    const sum = i
      .toString()
      .split("")
      .reduce((s, c) => s + Number(c), 0);
    if (sum % 2 === 0) {
      count++;
    }
    i++;
  }
  return count;
};
