package main

import "fmt"

/**
判断是不是回文数
 */
func isPalindrome(x int) bool {
	// 如果是负数，就不可能是回文数 -121 => 121-
	if x < 0 {
		return  false
	}
	// 同样地，如果数字的最后一位是 0，为了使该数字为回文，
	// 则其第一位数字也应该是 0
	// 只有 0 满足这一属性  100 => 001
	if x%10 ==0 && x!= 0 {
		return false
	}
	rev := 0
	// 计算到中间位置，就可以了
	for x > rev {
		// 结果数，往前进一位，并且加上余数
		rev = rev*10+x%10
		// 目标数，每次递除10
		x /= 10
	}
	/*
		x == rev （偶数的情况）
		x== rev/10	（奇数的情况）
	*/
	return x == rev || x== rev/10
}

func main() {
	fmt.Println(isPalindrome(1011))
}
