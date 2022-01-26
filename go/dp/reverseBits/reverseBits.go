package main

import (
	"fmt"
)

func reverseBits(num int)  int {
	// cur遇1=>+1，遇0 => 0,insert保存最大的结果
	cur,insert,res := 0,0,1
	for i := 0; i < 32; i++ {
		if num & (1<<i) != 0{
			// 说明当前遍历到的该位数是2的倍数，即为1，遇到的是1
			cur += 1
			insert += 1
		}else {
			// 把当前的结果保存
			insert = cur + 1
			cur = 0
		}
		res = getMax(res,insert)
	}
	return res
}
func getMax(a int,b int)int  {
	if a > b {
		return a
	}else {
		return b
	}
}
func main() {
	//a := strconv.FormatInt(1775,32)
	fmt.Println(reverseBits(1775))// expect 8
	fmt.Println(reverseBits(7))// expect 4
}
