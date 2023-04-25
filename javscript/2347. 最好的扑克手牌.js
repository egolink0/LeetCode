/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every(item => item === suits[0])) return "Flush";
  const rankMap = ranks.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  if (Object.values(rankMap).find(v => v >= 3)) return "Three of a Kind";
  if (Object.values(rankMap).find(v => v === 2)) return "Pair";
  if (Object.values(rankMap).every(v => v === 1)) return "High Card";
  return "";
};
