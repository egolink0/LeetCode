/**
 * @param {string} target
 * @return {string}
 */

var alphabetBoardPath = function (target) {
  const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
  const map = board.reduce((pre, cur, rowIndex) => {
    for (let i = 0; i < cur.length; i++) {
      pre[cur[i]] = [rowIndex, i];
    }
    return pre;
  }, {});

  const get = (n, c) => new Array(Math.abs(n)).fill(c).join("");
  const generate = (res, curPosition, next) => {
    const [rNext, cNext] = next;
    const [r, c] = curPosition;

    if (r === rNext && c === cNext) res += ""; // 当前位置
    else {
      res += get(rNext - r, rNext - r > 0 ? "D" : "U");
      res += get(cNext - c, cNext - c > 0 ? "R" : "L");
    }
    return res;
  };

  let res = "";
  let curPosition = [0, 0];
  for (let letter of target) {
    const [rNext, cNext] = map[letter];
    const [r,c] = curPosition;
    if (rNext === r && cNext ===c) res+="";
    else if (r === 5 || rNext === 5) {
      if (r === 5) {
        res += "U";
        res = generate(res, [4, 0],map[letter]);
      } else {
        res = generate(res,curPosition,[4,0]);
        res += "D";
      }
    } else {
      res = generate(res, curPosition, map[letter]);
    }
    res += "!";
    curPosition = map[letter];
  }
  return res;
};
