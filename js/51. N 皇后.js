/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n < 0 || n > 31) return [];

  const queue = new Array(n).fill(-1);
  const solutions = [];
  let row = 0;
  process(solutions, queue, row, n, 0, 0, 0);
  return solutions;
};
function process(solutions, queue, row, n, colLim, leftDiaLim, rightDiaLim) {
  const limit = n >= 32 ? -1 : (1 << n) - 1;
  if (limit === colLim) {
    // 所有位置都已经放好皇后
    const board = generatedBoard(queue, n);
    solutions.push(board);
  }
  // 当前皇后位置的总限制
  const totalLim = colLim | leftDiaLim | rightDiaLim;
  // 计算出可以进行尝试摆放的皇后位置情况
  let pos = limit & ~totalLim;
  // 每一个位置的最右侧
  let mostRightOne = 0;
  // 直到所有可尝试的位置都尝试了，结束循环
  while (pos !== 0) {
    mostRightOne = pos & (~pos + 1);
    // 获取当前是第几列
    const column = bitCount(mostRightOne - 1);
    console.log(`当前第${row}行${column}列`);
    // 保存值
    queue[row] = column;
    // 截取下次可尝试的位置
    pos ^= mostRightOne;
    process(
      solutions,
      queue,
      row + 1,
      n,
      colLim | mostRightOne, // 标记当前尝试的位置为1
      (leftDiaLim | mostRightOne) << 1, // 标记当前尝试的位置为1,左移
      (rightDiaLim | mostRightOne) >>> 1 // 标记当前尝试的位置为1,右移
    );
    queue[row] = -1;
  }
}
/**
 * 计算1的个数
 * @param {*} n
 * @returns
 */
function bitCount(n) {
  let res = 0;
  let rightOne = 0;
  while (n !== 0) {
    rightOne = n & (~n + 1);
    n ^= rightOne;
    res++;
  }
  return res;
}
function generatedBoard(queens, n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    const row = new Array(n).fill(".");
    row[queens[i]] = "Q";
    board.push(row.join(""));
  }
  return board;
}
console.log(solveNQueens(4));
