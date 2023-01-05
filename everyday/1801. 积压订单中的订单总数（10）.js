/**
 * @param {number[][]} orders
 * @return {number}
 */

var addItemToOrderedArr = (arr, item) => {
  if (!arr.length) {
    arr.push(item);
    return;
  }
  if (item[0] < arr[0][0]) {
    arr.unshift(item);
    return;
  } else {
    for (let i = arr.length - 1; i > -1; i--) {
      if (arr[i][0] <= item[0]) {
        arr.splice(i + 1, 0, item);
        return;
      }
    }
  }
};

const resetSell = (sell, buy, item) => {
  if (!sell.length) {
    addItemToOrderedArr(buy, item);
    return;
  }
  const [sellPrice, sellAmount] = sell[0];
  const [buyPrice, buyAmount] = item;
  if (sellPrice <= buyPrice) {
    if (sellAmount > buyAmount) {
      sell[0][1] = sellAmount - buyAmount;
    } else if (sellAmount === buyAmount) {
      sell.shift();
    } else {
      sell.shift();
      item[1] = buyAmount - sellAmount;
      resetSell(sell, buy, item);
    }
  } else {
    addItemToOrderedArr(buy, item);
  }
};

const resetBuy = (buy, sell, item) => {
  if (!buy.length) {
    addItemToOrderedArr(sell, item);
    return;
  }
  const [buyPrice, buyAmount] = buy[buy.length - 1];
  const [sellPrice, sellAmount] = item;
  if (buyPrice >= sellPrice) {
    if (buyAmount === sellAmount) {
      buy.pop();
    } else if (buyAmount > sellAmount) {
      buy[buy.length - 1][1] = buyAmount - sellAmount;
    } else {
      buy.pop();
      item[1] = sellAmount - buyAmount;
      resetBuy(buy, sell, item);
    }
  } else {
    addItemToOrderedArr(sell, item);
  }
};

var getNumberOfBacklogOrders = function (orders) {
  const buy = [];
  const sell = [];
  orders.forEach((item) => {
    if (item[2] === 0) {
      resetSell(sell, buy, item);
    } else {
      resetBuy(buy, sell, item);
    }
    // console.log("item - buy - sell::",JSON.stringify(item),"****",JSON.stringify(buy),"****",JSON.stringify(sell))
  });

  const res = buy.concat(sell).reduce((sum, item) => {
    return sum + item[1];
  }, 0);

  return res % (10 ** 9 + 7);
};
