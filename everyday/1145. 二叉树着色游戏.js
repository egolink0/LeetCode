/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */


// TODO: 性能优化

// 二叉树转化成 map 形式，二维，快速搜索
const tranferRoot = (root,rootVal=null,map={}) =>{
    const {val,left,right} = root;
    map[val] = {left:left && left.val,right:right && right.val,root:rootVal};
    left && tranferRoot(left,val,map);
    right && tranferRoot(right,val,map);
    return map;
}

// 获取点的相邻的点集合
const getConnectedNode = (map,nodes,expected) =>{
    const result = [];
    nodes.forEach(o => {
        Object.values(map[o]).forEach(num =>{
            num && !expected.includes(num) && !result.includes(num) && result.push(num);
        })
    })
    return result;
};

const removeNode = (node,restRed,restBlue) => {
    restBlue.indexOf(node) !== -1 && restBlue.splice(restBlue.indexOf(node),1);
    restRed.indexOf(node) !==-1 && restRed.splice(restRed.indexOf(node),1);
};

const goNext = (mapRoot,red,blue) =>{
    const restRed = getConnectedNode(mapRoot,red,red.concat(blue)); 
    let restBlue = getConnectedNode(mapRoot,blue,red.concat(blue));
    // 没有红色了，蓝色还有蓝色赢，否则平手即输
    if(!restRed.length) return restBlue.length ;
    for(let node of restRed){
        red.push(node);
        restBlue = getConnectedNode(mapRoot,blue,red.concat(blue));
        // 没有蓝色了，红色赢
        if(!restBlue.length) return false;
        for(let node of restBlue){
            blue.push(node);
            return goNext(mapRoot,red,blue,restRed,restBlue);
        }
    }
}

var btreeGameWinningMove = function(root, n, x) {
    const mapRoot = tranferRoot(root);
    // blue 可以选择的点范围
    for(let i=1;i<=n;i++){
        if(i!==x){
            const red = [x]; // 已经被涂红色色的点 
            const blue = [i];
             const restRed = getConnectedNode(mapRoot,red,red.concat(blue)); // 剩余可以涂红色的点
            const restBlue = getConnectedNode(mapRoot,blue,red.concat(blue));
            if(goNext(mapRoot,red,blue,restRed,restBlue)){
                return true;
            }
        }
    }
    return false;
};

