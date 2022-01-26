/**
 * https://leetcode-cn.com/problems/remove-element/
 */
/**双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var left = 0;// 左指针作用是记录
    for (let right = 0; right < nums.length; right++) {// 右指针作用负责查找
        // 查找的数不是要过滤的
        if(nums[right] !== val) {
            nums[left] = nums[right]
            left++
        }
    }
    return  left
};

console.log(removeElement([3, 2, 2, 3], 3)); //2, nums = [2,2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5, nums = [0,1,4,0,3]
