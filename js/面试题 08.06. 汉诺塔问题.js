/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  function move(size, from, other, to) {
    // 只剩下一个
    if (size === 1) {
      // 直接移动到to
      to.unshift(from.shift());
      return;
    }
    // 先将N-1个从from移动到other
    move(size - 1, from, to, other);
    // 将最后一个移动到to
    to.unshift(from.shift());
    // 将other移动到to
    move(size - 1, other, from, to);
  }

  move(A.length, A, B, C);
  return {
    A,
    B,
    C,
  };
};
console.log(hanota([2, 1, 0], [], []));
console.log(hanota([1, 0], [], []));
