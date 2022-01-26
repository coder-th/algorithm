package main

import "fmt"

func romanToInt(s string) int  {
	// 建立映射表
	romeMap := map[byte]int{'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
	length := len(s)
	ans := 0
	for index, _ := range s {
	//	当前字符对应的数字
		 currentValue := romeMap[s[index]]
		if index < length-1 &&  currentValue< romeMap[s[index+1]] {
			// 当前字符还在字符串内，并且比下一个字符还要小，就需要 -1
			ans -= currentValue
		}else {
			ans += currentValue
		}
	}
	return ans
}

func main() {
	fmt.Println(romanToInt("IVV"))
}
