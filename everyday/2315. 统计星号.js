/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let pair = 0;
    let count = 0;
    s.split("").forEach(item => {
        if(pair===0 && item === "*"){
            count += 1;
        }else if(item === "|"){
            pair = pair ? 0:1;
        }
    })
    return count;
};
