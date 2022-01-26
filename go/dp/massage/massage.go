package main

import "fmt"

/**
面试题 17.16. 按摩师
https://leetcode-cn.com/problems/the-masseuse-lcci/
 */
func message(nums []int) int {
	if len(nums) == 0 {
		return  0
	}
	// dp0表示第i-1轮不想接单，dp1表示第i-1轮想接单
	dp0,dp1 := 0,nums[0]
	for i := 1; i < len(nums); i++ {
		tp0 := getMax(dp0,dp1)
		tp1 := dp0 + nums[i]
		dp0 = tp0
		dp1 = tp1
	}
	return getMax(dp0,dp1)
}
func getMax(a int,b int) int  {
	if a > b {
		return a
	}else {
		return b
	}
}
func main() {
	fmt.Println(message([]int {1,2,3,1})) // expect 4
	fmt.Println(message([]int {2,7,9,3,1})) // expect 12
	fmt.Println(message([]int {2,1,4,5,3,1,1,3})) // expect 12
}
