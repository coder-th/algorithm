package main

import "fmt"
//
//  waysToStep
//  @Description: 使用递归解决
//  @param n
//  @return ans
//
/*func waysToStep(n int) (ans int) {
	if n == 1 {
		return 1
	}else if n== 2 {
		return 2
	}else if n== 3 {
		return  4
	}else {
		ans = waysToStep(n-1)+ waysToStep(n-2)+ waysToStep(n-3)

	}
	return
}*/
//
//  waysToStep
//  @Description: 使用滚动数组解决
//  @param n
//  @return ans
//
func waysToStep(n int) (ans int) {
	if n == 1 {
		return 1
	}else if n== 2 {
		return 2
	}else if n== 3 {
		return  4
	}else {
		grand,parent,current := 1,2,4
		for i := 4; i <= n; i++ {
			ans = (grand+parent+current)%1000000007
			grand = parent
			parent = current
			current = ans
		}
	}
	return
}
func main() {
fmt.Println(waysToStep(3))// expect 4
fmt.Println(waysToStep(5))// expect 13
fmt.Println(waysToStep(76))// expect 176653584
}
