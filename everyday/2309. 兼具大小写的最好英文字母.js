/**
 * @param {string} s
 * @return {string}
 */

const isLowerCase = c => c>=65 && c<= 90;

var greatestLetter = function(s) {
    const map = {};
    let res = 0;
    const diff = 32;
    s.split("").forEach(c =>{
        const ascii = c.charCodeAt(0);
        const isL = isLowerCase(ascii);
        const pair = isL ? ascii + diff : ascii - diff;
        if(map[pair]){
            const l = isL ? ascii : ascii - diff;
            if(res <= l){
                res = l;
            }
        }else{
            map[ascii] = 1;
        }
    });
    return  !res ? "" : String.fromCharCode(res);
};
