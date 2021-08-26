/**
 * @description 最长回文字符串
 * 给你一个字符串 s，找到 s 中最长的回文子串
 * @example 'babad', a 就是最长的回文子串
 */

// 题目
let ts1 = "babad"

let ts2 = "cbbd"

let ts3 = "a"

let ts4 = "ac"

let tsLongestPalindrome = (s: string): string => {
	if(s.length < 2) return s
    var len:number = s.length
    var result:string = ''

    for	(let i = 0; i < len; i++){
        // 分别处理奇数偶数情况
        getResult(i,i)
        getResult(i,i+1)
    }

    function getResult(m,n){
        while(m >= 0 && n < len && s[m] == s[n]){
            m--
            n++
        }
        // 此刻循环结束，也是刚刚不满足条件的时候，mn需要分别向前取一位
        if(n - m - 1 > result.length) {
            result = s.slice(m + 1, n)
        }
    }
    return result
};

console.log(tsLongestPalindrome(ts1));