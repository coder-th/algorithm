package main

import (
	"fmt"
	"math"
)

func reverse(x int)(rev int)  {
	for x!= 0 {
		// 边界条件的判断
		if rev < math.MinInt32/10 || rev > math.MaxInt32/10 {
			return 0
		}
		digit := x%10
		x/=10
		rev = rev*10+digit
	}
	return
}


func main() {
	fmt.Println(reverse(123456))
}
