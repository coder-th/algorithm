var reverseStack = function (stack) {
  if (stack.length <= 1) return stack;
  function getLastAndRemove(stack) {
    const result = stack.pop();
    if (stack.length === 0) {
      return result;
    } else {
      const last = getLastAndRemove(stack);
      stack.push(result);
      return last;
    }
  }
  const last = getLastAndRemove(stack);
  console.log("before", last);
  reverseStack(stack);
  console.log("after", last);
  stack.push(last);

  return stack;
};

var reverseStack2 = function (stack) {
  if (stack.length <= 1) return stack;

  function insertToBottom(element, stack) {
    if (stack.length === 0) {
      // 栈中没有元素,直接加吧
      stack.push(element);
      return;
    }
    const top = stack.pop();
    insertToBottom(element, stack);
    stack.push(top);
  }

  // 弹出顶部
  const top = stack.pop();
  console.log("before", top);
  // 你继续反转吧，
  reverseStack2(stack);
  console.log("after", top);
  // 将top加到栈的最底部
  insertToBottom(top, stack);

  return stack;
};

// console.log(reverseStack([1, 2, 3, 4, 5]));
console.log(reverseStack2([1, 2, 3, 4, 5]));
// console.log(reverseStack([1]));
// console.log(reverseStack([]));
