package main

import (
	"fmt"
	"math"
)
/*
	509. 斐波那契数
		 https://leetcode-cn.com/problems/fibonacci-number/
*/
//
//  fib
//  @Description: 暴力解法
//  @param n
//  @return res
//
/*func fib(n int) (res int) {
	// 状态转移方程 dp[i] = dp[i-1] + dp[i-2]
	if n == 0 || n== 1 {
		return n
	}
	res = fib(n-1) + fib(n-2)
	return
}*/
//
//  fib
//  @Description: 滚动数组
//  @param n
//  @return res
//
/*func fib(n int)  int {
	// 状态转移方程 dp[i] = dp[i-1] + dp[i-2]
	if n == 0 || n== 1 {
		return n
	}
	pre,current,next := 0,0,1
	for i := 2; i <= n; i++ {
		pre = current
		current = next
		next = pre + current
	}
	return next
}*/

//
//  fib
//  @Description: 公式法
//  @param n
//  @return res
//
func fib(n int) (res int) {
	// 状态转移方程 dp[i] = dp[i-1] + dp[i-2]
	if n == 0 || n== 1 {
		return n
	}
	sqrt := math.Sqrt(5)
	x1,x2 := math.Pow((sqrt-1)/2,float64(n)),math.Pow((sqrt+1)/2,float64(n))
	return int(math.Round((1/sqrt)*(x2-x1)))
}

func main() {
	fmt.Println(fib(2)) // expect: 1
	fmt.Println(fib(3)) // expect: 2
	fmt.Println(fib(50)) // expect: 12586269025
}
