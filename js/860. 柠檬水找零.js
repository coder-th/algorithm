/**
 *https://leetcode-cn.com/problems/lemonade-change/
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 记录当前 5 10的个数
  var five = 0;
  var ten = 0;
  for (var i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      // 如果顾客给的是5元，不用找零,five++
      five += 1;
    } else if (bills[i] === 10) {
      // 如果顾客给的是10，需要找5元，ten++,five--
      if (five === 0) {
        // 没有5元可以找了
        return false;
      }
      ten += 1;
      five -= 1;
    } else {
      // 如果顾客给的是20 需要：
      if (five >= 1 && ten >= 1) {
        // 优先找10元，尽量减少5元的消耗
        // b: 找1张5元，一张10元 five-- ten--
        five -= 1;
        ten -= 1;
      } else if (five >= 3) {
        //a: 找3张5元 five-3
        five -= 3;
      } else {
        // 没有足够的5元或者10元
        return false;
      }
    }
  }
  return true;
};
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
console.log(lemonadeChange([5, 5, 10])); // true
console.log(lemonadeChange([10, 10])); // false
