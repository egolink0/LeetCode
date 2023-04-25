/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.map = {};
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.map[tokenId] = currentTime;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  const oldTime = this.map[tokenId];
  // 已经过期，则不更新
  if (oldTime && oldTime + this.timeToLive > currentTime) {
    this.map[tokenId] = currentTime;
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  const data = this.map;
  let count = 0;
  Object.entries(data).forEach(item => {
    const [k, v] = item;
    if (v + this.timeToLive > currentTime) {
      count++;
    }
  });
  return count;
};
