/**
 * @param {number[][]} grid
 * @return {number}
 */

let max = 0;
let grid = [];
let visited = [];

// 是否在边界内
const isInRange = pos => pos[0] >= 0 && pos[0] <= max && pos[1] >= 0 && pos[1] <= max;

// 是否通路
const isAccess = pos => isInRange(pos) && !grid[pos[0]][pos[1]];

// 是否访问过
const isNotVisited = p => !visited.includes(p);

const canGo = posArr => {
  const [p1, next] = posArr;
  const str = p1.concat(next).join(",");
  const res = isNotVisited(str);
  res && visited.push(str);
  return res;
};

const canGoPos = pos => {
  const [p1, p2] = pos;
  const canGoList = [];
  const isHorizontal = p1[0] === p2[0];
  // 水平
  if (isHorizontal) {
    // 1. 朝右走
    const right = [p2[0], p2[1] + 1];
    if (isAccess(right) && canGo([p2, right])) canGoList.push([p2, right]);
    const downPair = [
      [p1[0] + 1, p1[1]],
      [p2[0] + 1, p2[1]],
    ];
    // 2. 下面两个都是空的
    if (isAccess(downPair[0]) && isAccess(downPair[1])) {
      // 2.1 顺时针 90 度
      const down = [p1[0] + 1, p1[1]];
      if (canGo([p1, down])) canGoList.push([p1, down]);
      // 2.2 垂直向下平移
      if (canGo(downPair)) canGoList.push(downPair);
    }
  } else {
    // 垂直
    const down = [p2[0] + 1, p2[1]]; // 朝下走
    if (isAccess(down) && canGo([p2, down])) canGoList.push([p2, down]);
    const rightPair = [
      [p1[0], p1[1] + 1],
      [p2[0], p2[1] + 1],
    ];
    if (isAccess(rightPair[0]) && isAccess(rightPair[1])) {
      const right = [p1[0], p1[1] + 1];
      if (canGo([p1, right])) canGoList.push([p1, right]);
      if (canGo(rightPair)) canGoList.push(rightPair);
    }
  }
  return canGoList;
};

const generate = posArr => posArr[0].join(",") + "," + posArr[1].join(",");

var minimumMoves = function (oGrid) {
  max = oGrid[0].length - 1;
  grid = oGrid;
  visited = [];
  // 初始位置
  visited.push("0,0,0,1");
  let current = [
    [
      [0, 0],
      [0, 1],
    ],
  ];
  const end = [
    generate([
      [max, max - 1],
      [max, max],
    ]),
    generate([
      [max, max],
      [max, max - 1],
    ]),
  ];

  let step = 0;
  while (current.length) {
    step++;
    let newCurrent = [];
    current.forEach(pos => {
      const list = canGoPos(pos);
      newCurrent = newCurrent.concat(list);
    });
    if (newCurrent.find(item => end.includes(generate(item)))) {
      break;
    } else {
      current = newCurrent;
    }
    if (!newCurrent.length) {
      step = -1;
    }
  }
  return step;
};
