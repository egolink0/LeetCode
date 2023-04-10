/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (let item of s) {
    if (item === "]") {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      stack.pop();
      let count = "";
      while (Number(stack[stack.length - 1]) > -1) {
        count = stack.pop() + count;
      }
      const repeatStr = count ? new Array(Number(count)).fill(str).join("") : str;
      stack.push(repeatStr);
    } else {
      stack.push(item);
    }
  }
  return stack.join("");
};
