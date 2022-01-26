package main

import (
	"fmt"
)
/**
53. 最大子序和 https://leetcode-cn.com/problems/maximum-subarray/
 */
//
//  maxSubArray
//  @Description: 动态规划 O(n)
//  @param nums
//  @return res
//
/*func maxSubArray(nums []int) (res int) {
	if len(nums) == 0 {
		return 0
	}
 	res = nums[0]
	if len(nums) == 1 {
		 return
	}
	pre := 0
	for i := 0; i < len(nums); i++ {
		// pre = max { pre, pre + nums[i]} 状态转移方程
		pre = int(math.Max(float64(nums[i]),float64(pre+nums[i])))
		// res = max { pre, res }
		res = int(math.Max(float64(res),float64(pre)))
	}
	return
}*/
/*func maxSubArray(nums []int) (res int) {
	res = nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] + nums[i-1] > nums[i] {
			nums[i] = nums[i] + nums[i-1]
		}
		if nums[i] > res {
			res = nums[i]
		}
	}

	return
}*/
/*func maxSubArray(nums []int)  int {
	// 转移方程 f[i] = max(f(i-1)+nums[i],f(i-1))
	if len(nums) == 0 {
		return 0
	}
	if len(nums) == 1 {
		return  nums[0]
	}
	pre,ans := 0,nums[0]
	for i := 0; i < len(nums) ; i++ {
		pre = getMax(pre+nums[i],nums[i])
		ans = getMax(ans,pre)
	}
	return ans
}*/
func maxSubArray(nums []int)  (ans int) {
	ans = nums[0]
	// 先把每个位置前几项和累计气力啊
	for i := 1; i < len(nums); i++ {
		nums[i] = getMax(nums[i],nums[i]+nums[i-1])
		// 遍历拿到最大值
		ans = getMax(nums[i],ans)
	}
	return
}
func  getMax(a int,b int) int  {
	if a > b {
		return  a
	}else {
		return  b
	}
}
func main() {
	fmt.Println(maxSubArray([]int{-2,1,-3,4,-1,2,1,-5,4}))//6
	fmt.Println(maxSubArray([]int{-2,-1}))//-1
	fmt.Println(maxSubArray([]int{1,2}))//3
}
