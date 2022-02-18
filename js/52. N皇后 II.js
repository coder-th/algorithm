/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  if (n < 0 || n > 31) {
    return -1;
  }
  //   生成后面n个都为1，其他都为0的二进制 8 => 0...0 1111 1111
  const limit = n >= 32 ? -1 : (1 << n) - 1;
  return process(limit, 0, 0, 0);
};
/***
 * 上一次的位置  (a,b)
 * 当前的位置    (c,d)
 * 表示同列或者在左右斜线的表达式为
 * b === d || Math.abs(a-c) === Math.abs(b-d)
 *
 */
/**
 *
 * @param {*} limit 问题的规模
 * @param {*} colLim 列限制[0:可选,1:已被占用]
 * @param {*} leftDiaLim 左斜线限制[0:可选,1:已被占用]
 * @param {*} rightDiaLim 右斜线限制[0:可选,1:已被占用]
 * @returns
 */
function process(limit, colLim, leftDiaLim, rightDiaLim) {
  if (colLim === limit) {
    //   代表所有列已经被占了
    return 1;
  }
  /**
   * colLim | leftDiaLim | rightDiaLim              ->  总限制[0:可选,1:已被占用],所有限制信息集合起来
   * ~(colLim | leftDiaLim | rightDiaLim)           ->  左侧一堆0取反,可以让其不进行干扰[0:不可用,1:已被占用]
   * limit & ~(colLim | leftDiaLim | rightDiaLim)   ->  截取掉左侧干扰的，最终的效果就是 0...0 1110 0001 之类
   *                                                     注意：[0:不可用,1:可以进行尝试的位置] 1代表可尝试的皇后位置
   */
  // 当前皇后位置的总限制
  const totalLim = colLim | leftDiaLim | rightDiaLim;
  // 计算出可以进行尝试摆放的皇后位置情况
  let pos = limit & ~totalLim;
  // 每一个位置的最右侧
  let mostRightOne = 0;
  // 摆放的次数
  let res = 0;
  // 直到所有可尝试的位置都尝试了，结束循环
  while (pos !== 0) {
    //  取出每一次最右侧可尝试摆放的皇后位置
    mostRightOne = pos & (~pos + 1);
    //  计算当前位置放置后下一个可摆放结果
    res += process(
      limit,
      colLim | mostRightOne, //标记当前已经尝试的位置为占用
      (leftDiaLim | mostRightOne) << 1, //标记当前已经尝试的位置为占用，需要向左，因为是左斜线
      (rightDiaLim | mostRightOne) >> 1 //标记当前已经尝试的位置为占用，需要向右，因为是右斜线
    );
    //  截取掉最右侧可摆放的位置，不断循环到所有位置都进行尝试完毕
    pos ^= mostRightOne;
  }
  return res;
}
console.log(totalNQueens(4));
