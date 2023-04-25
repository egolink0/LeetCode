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

// #### 模拟取数的流程，遍历判断是否有赢的可能
// 1. 二叉树转哈希，更快找到元素
// 2. 四个数组，已经涂红的点集合 A，已经涂蓝色的点集合 B，相对于A来说剩余可以涂的点集合 A_rest,相对于A来说剩余可以涂的点集合 C_rest
// 3. 开始二层遍历，先处理 A_rest,取出一个点放入 A，更新 A_rest,B_rest,处理 B,取出 一个点放入 B，重复
// 4. 如果某次没有点可以取了，就结束，判断取得点的个数

// 二叉树转化成 map 形式，二维，快速搜索
// const tranferRoot = (root,rootVal=null,map={}) =>{
//     const {val,left,right} = root;
//     map[val] = {left:left && left.val,right:right && right.val,root:rootVal};
//     left && tranferRoot(left,val,map);
//     right && tranferRoot(right,val,map);
//     return map;
// }

// // 获取点的相邻的点集合
// const getConnectedNode = (map,nodes,expected) =>{
//     const result = [];
//     nodes.forEach(o => {
//         Object.values(map[o]).forEach(num =>{
//             num && !expected.includes(num) && !result.includes(num) && result.push(num);
//         })
//     })
//     return result;
// };

// const removeNode = (node,restRed,restBlue) => {
//     restBlue.indexOf(node) !== -1 && restBlue.splice(restBlue.indexOf(node),1);
//     restRed.indexOf(node) !==-1 && restRed.splice(restRed.indexOf(node),1);
// };

// const goNext = (mapRoot,red,blue) =>{
//     const restRed = getConnectedNode(mapRoot,red,red.concat(blue)); 
//     let restBlue = getConnectedNode(mapRoot,blue,red.concat(blue));
//     // 没有红色了，蓝色还有蓝色赢，否则平手即输
//     if(!restRed.length) return restBlue.length ;
//     for(let node of restRed){
//         red.push(node);
//         restBlue = getConnectedNode(mapRoot,blue,red.concat(blue));
//         // 没有蓝色了，红色赢
//         if(!restBlue.length) return false;
//         for(let node of restBlue){
//             blue.push(node);
//             return goNext(mapRoot,red,blue,restRed,restBlue);
//         }
//     }
// }

// var btreeGameWinningMove = function(root, n, x) {
//     const mapRoot = tranferRoot(root);
//     // blue 可以选择的点范围
//     for(let i=1;i<=n;i++){
//         if(i!==x){
//             const red = [x]; // 已经被涂红色色的点 
//             const blue = [i];
//              const restRed = getConnectedNode(mapRoot,red,red.concat(blue)); // 剩余可以涂红色的点
//             const restBlue = getConnectedNode(mapRoot,blue,red.concat(blue));
//             if(goNext(mapRoot,red,blue,restRed,restBlue)){
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// 第二种，第一个 y 节点选择 x 接的剩余的三个部分，判断是否存在某个部分 y 的区域大于 x 的区域

var btreeGameWinningMove = function(root, n, x) {
    // 二叉树转化成 map 形式，二维，快速搜索
    const tranferRoot = (root,rootVal=null,map={}) =>{
        const {val,left,right} = root;
        map[val] = {left:left && left.val,right:right && right.val,root:rootVal};
        left && tranferRoot(left,val,map);
        right && tranferRoot(right,val,map);
        return map;
    };

    const getRestCount = (num,mapRoot,expectedNums) =>{
        let count = 1;
        console.log("num",num)
        Object.values(mapRoot[num]).forEach(n => {
            if(n && !expectedNums.includes(n)){
                expectedNums.push(n);
                count += getRestCount(n,mapRoot,expectedNums);
            }
        });
        return count;
    }
    const mapRoot = tranferRoot(root);
    const nums = [];
    for(let num of Object.values(mapRoot[x])){
        num && nums.push(getRestCount(num,mapRoot,[x,num]));
    }
    nums.sort((a,b) => a-b); // 升序
    if(nums.length === 1) return nums[0]>1;
    if(nums.length === 2) return nums[0]+1 < nums[nums.length-1];
    return nums[0]+nums[1]+1 < nums[2] 
}
