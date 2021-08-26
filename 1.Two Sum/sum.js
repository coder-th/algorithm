// 哈希映射
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0,len = nums.length; i < len; i++) {
        let key = target - nums[i];
        if (map.has(key)) {
            return [map.get(key), i]
        }
        map.set(nums[i], i)
    }
    throw Error('No two sum solution')
};
