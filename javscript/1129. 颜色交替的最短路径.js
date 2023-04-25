const bfs = (min, redGrid, blueGrid) => {
  let step = 1;
  const redVisited = [];
  const blueVisited = [];
  // 初始红色线，从 0 开始
  let roads = redGrid[0].map(end => [0, end]);
  roads.forEach(item => {
    const [, end] = item;
    redVisited.push([...item]);
    min[end] = Math.min(min[end], step);
  });
  while (roads.length) {
    step++;
    const isBlue = step % 2 === 0;
    const grid = isBlue ? blueGrid : redGrid;
    const visited = isBlue ? blueVisited : redVisited;
    const newRoads = [];
    roads.forEach(item => {
      const start = item[item.length - 1];
      const endList = grid[start];
      endList.forEach(end => {
        if (!visited.find(v => v[0] === start && v[1] === end)) {
          newRoads.push([...item, end]);
          visited.push([start, end]);
        }
      });
    });
    newRoads.forEach(item => {
      const end = item[item.length - 1];
      min[end] = Math.min(min[end], step);
    });
    roads = newRoads;
  }
};

var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const min = new Array(n).fill(Number.MAX_VALUE);
  min[0] = 0;
  // 建图
  const redGrid = new Array(n).fill(0).map(() => []);
  redEdges.forEach(e => redGrid[e[0]].push(e[1]));
  const blueGrid = new Array(n).fill(0).map(() => []);
  blueEdges.forEach(e => blueGrid[e[0]].push(e[1]));
  bfs(min, redGrid, blueGrid);
  bfs(min, blueGrid, redGrid);
  min.forEach((item, index) => item === Number.MAX_VALUE && (min[index] = -1));
  return min;
};
