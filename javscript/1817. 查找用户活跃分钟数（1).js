/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const mapIdToLogNum = {};
    logs.forEach(l => {
        const id = l[0];
        if(mapIdToLogNum[id]){
            mapIdToLogNum[id].add(l[1]);
        }else{
            mapIdToLogNum[id] = new Set([l[1]]);
        }
    });

    const res = new Array(k).fill(0);
    Object.values(mapIdToLogNum).forEach(s =>{
        const uam = s.size;
        if(uam-1 <= k){
            res[uam-1]+=1;
        }
    })
    return res;
};
