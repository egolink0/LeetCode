/**
 * @param {number[][]} grid
 * @return {boolean}
 */

// 坐标是否在对角线上
 const isDiagonal = (pos,len) => pos[0] === pos[1] || (pos[0]+pos[1] === len);

var checkXMatrix = function(grid) {
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(isDiagonal([i,j],grid[0].length-1)){
                if(grid[i][j] === 0 ) return false;
            }else{
                if(grid[i][j] !== 0 ) return false;
            }
        }
    }
    return true;
};
