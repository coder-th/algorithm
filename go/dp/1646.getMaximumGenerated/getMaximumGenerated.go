package main

import "fmt"

func getMaximumGenerated(n int) int {
	nums := make([]int,n+1)
	max := nums[0]
	for i := 0; i <= n; i++ {
		if i <= 1 {
			nums[i] = i
			max = i
		}
		if 2*i <= n {
			nums[2*i] = nums[i]
		}
		if 2*i+1 <= n {
			nums[2*i+1] = nums[i] + nums[i + 1]
			if max < nums[2*i+1] {
				max = nums[2*i+1]
			}
		}
	}
	return max
}
func main() {
	fmt.Println(getMaximumGenerated(15)) // expect: 5
	fmt.Println(getMaximumGenerated(7)) // expect: 3
	fmt.Println(getMaximumGenerated(8)) // expect: 3
	fmt.Println(getMaximumGenerated(2)) // expect: 1
	fmt.Println(getMaximumGenerated(3)) // expect: 2
}
