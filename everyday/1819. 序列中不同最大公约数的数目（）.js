/**
 * @param {number[]} nums
 * @return {number}
 */
// 判断两个升序数组是否完全相等
const compareArray = (arr, arr2) => arr.join("") === arr2.join("");

const hasArray = (list, arr) => list.find(oldList => compareArray(oldList, arr));

// 获取子序列合集
const getChildrenList = (nums) => {
    let list = [];
    nums.forEach((n, i) => {
        const newList = hasArray(list, [n]) ? [] : [
            [n]
        ];
        list.forEach(cList => {
            // 取出原先的子序列，拼接最新加入的 num，升序排列
            const newC = [...cList, n].sort((a, b) => a - b);
            if (!hasArray(list, [n])) {
                newList.push(newC)
            }
        });
        list = list.concat(newList);
    });
    return list;
};

// 获取数组元素的最大公约数
const getMaxCommonDivisor = arr => {
    let max = arr[arr.length - 1];

    while (max) {
        let isCommonDivsior = true;
        arr.forEach(num => {
            // 不可以除尽
            if (num % max) {
                isCommonDivsior = false;
            }
        })

        if (isCommonDivsior) {
            break;
        } else {
            max--;
        }
    }
    return max;
};

var countDifferentSubsequenceGCDs = function (nums) {
    const childrenList = getChildrenList(nums);
    const list = [];
    childrenList.forEach(c => {
        const divisor = getMaxCommonDivisor(c);
        // console.log(c,divisor)
        if (!list.find(item => item === divisor)) {
            list.push(divisor)
        };
    });
    return list.length
};

// 超出时间限制
// 优化方向？
