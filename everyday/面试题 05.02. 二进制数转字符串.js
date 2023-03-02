/**
 * @param {number} num
 * @return {string}
 */

var printBin = function (num, str = "0.") {
  if (str.length > 32) return "ERROR";
  const newN = num * 2;

  if (newN >= 1) {
    str += "1";
    num = newN - 1;
    if (num === 0) return str;
    return printBin(num, str);
  } else {
    str += "0";
    num = newN;
    return printBin(num, str);
  }
};
