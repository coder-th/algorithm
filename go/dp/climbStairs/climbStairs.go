package main

/**
70. 爬楼梯 https://leetcode-cn.com/problems/climbing-stairs/
*/
import (
	"fmt"
	"math"
)

//
//  climbStairs
//  @Description: 普通方式实现(时间复杂度O(2^n))
//  @param n
//  @return int
//
/*func climbStairs(n int) int {
	res := 0
	if n >= 0 && n<= 2 {
		res = n
	}
	if n > 2 {
		res = climbStairs(n-1) + climbStairs(n-2)
	}
	return res
}*/

//
//  climbStairs
//  @Description: 通项公式
//  @param n
//  @return int
//
/*func climbStairs(n int) int {
	sqrt5 := math.Sqrt(5)
	pow1 := math.Pow((1+sqrt5)/2, float64(n+1))
	pow2 := math.Pow((1-sqrt5)/2, float64(n+1))
	return int(math.Round((pow1 - pow2) / sqrt5))
}*/

func climbStairs(n int) int {
	p, q, r := 0, 0, 1
	for i := 1; i <= n; i++ {
		p = q
		q = r
		r = p + q
	}
	return r
}
func main() {
	fmt.Println(climbStairs(1))
	fmt.Println(math.Pow(4.0, 0.5))
}
