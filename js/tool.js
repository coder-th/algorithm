/**
 * 生成一个只含字母的随机字符串(长度随机，字符随机)
 * @param {*} maxLen 最大长度
 * @returns
 */
function gernateRandomOnlyStr(maxLen) {
  // 先确定 A - z的charcode
  const range = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // 在这个范围随机挑出一个字符
  const getRandomChar = () => {
    return range[Math.floor(Math.random() * 51)];
  };
  // 生成一个随机长度
  const getRandomLen = (N) => Math.floor(Math.random() * N);
  // 遍历生成字符串
  let ans = "";
  for (let index = 0; index < getRandomLen(maxLen); index++) {
    ans += getRandomChar();
  }
  return ans;
}
/**
 * 生成一个随机数组(长度随机，值随机)
 * @param {*} maxLen
 * @param {*} maxValue
 * @param {*} isAllPositive
 * @returns
 */
function generateRandomArray(maxLen, maxValue, isAllPositive = false) {
  // 生成一个随机长度
  const getRandomLen = (N) => Math.floor(Math.random() * N);
  // 生成一个随机数
  const getRandomNumber = () => {
    return isAllPositive
      ? Math.floor(Math.random() * maxValue)
      : Math.floor(Math.random() * maxValue) -
          Math.floor(Math.random() * maxValue);
  };
  // 遍历生成数组
  let ans = [];
  for (let index = 0; index < getRandomLen(maxLen); index++) {
    ans.push(getRandomNumber());
  }
  return ans;
}

function isEqual() {}

// Internal recursive comparison function for `isEqual`.
var eq = function (a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // A strict comparison is necessary because `null == undefined`.
  if (a == null || b == null) return a === b;
  // Unwrap any wrapped objects.
  //   if (a instanceof _) a = a._wrapped;
  //   if (b instanceof _) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;
    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
  }

  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor,
      bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      !(
        _.isFunction(aCtor) &&
        aCtor instanceof aCtor &&
        _.isFunction(bCtor) &&
        bCtor instanceof bCtor
      ) &&
      "constructor" in a &&
      "constructor" in b
    ) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = _.keys(a),
      key;
    length = keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (_.keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
};

console.log(eq([1, 2], [1, 2]));
