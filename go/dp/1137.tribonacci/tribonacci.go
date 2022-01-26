package main

import "fmt"
//
//  tribonacci
//  @Description: 采用递归进行实现
//  @param n
//  @return ans
//
/*func tribonacci(n int) (ans int) {
	if n == 0 {
		return 0
	}else if n <= 2 {
		return 1
	}
	ans = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
	return
}*/
//
//  tribonacci
//  @Description: 使用滚动数组
//  @param n
//  @return ans
//
func tribonacci(n int) int {
	if n == 0 {
		return 0
	}else if n <= 2 {
		return 1
	}
	grand,parent,current,next:= 0,1,1,0
	for i := 3; i <= n; i++ {
		next = grand+ parent+ current
		grand = parent
		parent = current
		current = next
	}
	return next
}
func main() {
	fmt.Println(tribonacci(4))// expect 4
	fmt.Println(tribonacci(25))// expect 1389537
}
