var repeatedCharacter = function (s) {
  const map = {};
  for (let char of s.split("")) {
    if (map[char]) {
      return char;
    } else {
      map[char] = 1;
    }
  }
};
