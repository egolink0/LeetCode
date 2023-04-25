/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
// var prefixCount = function(words, pref) {
//     let count = 0;
//     words.forEach((w)=>{
//         const p = w.slice(0,pref.length);
//         if(p===pref){
//             count++;
//         }
//     })
//     return count;
// };

var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach((w) => {
    if (w.startsWith(pref)) {
      count++;
    }
  });
  return count;
};
