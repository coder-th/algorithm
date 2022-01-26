/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 先对数组进行排序
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    var left = (right = 0);
    var ans = [];
    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] === nums2[right]) {
            // if (ans[ans.length - 1] !== nums1[left]) {
                ans.push(nums1[left]);
            // }
            left++;
            right++;
        } else if (nums1[left] < nums2[right]) {
            left++;
        } else {
            right++;
        }
    }
    return ans;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); //[2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[9,4]
