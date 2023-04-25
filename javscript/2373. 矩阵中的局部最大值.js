/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const result = [];
    grid.forEach((row,rowIndex) =>{
        result[rowIndex] = [];
        for(let i=0;i<row.length-2;i++){
            result[rowIndex][i]= Math.max(row[i],row[i+1],row[i+2]);
        }
    });
    const res = [];
    
    for(let j=0;j<result.length-2;j++){
        res[j] = [];
        for(let i=0;i<result[0].length;i++){
            res[j][i] = Math.max(result[j][i],result[j+1][i],result[j+2][i])
        }
    }
    return res;
};
