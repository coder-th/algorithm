package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func createLinkList(arr []int)  (list *ListNode){
	root := &ListNode{Val: arr[0]}
	other := root
	for i := 1; i < len(arr); i++ {
		temp := &ListNode{Val: arr[i]}
		other.Next = temp
		other = temp
	}
	return root
}

func reverseList(head *ListNode) *ListNode {
	var pre *ListNode
	cur := head
	for cur != nil {
		temp := cur.Next
		cur.Next = pre
		pre = cur
		cur = temp
	}
	return pre
}
func main() {
	//fmt.Println(createLinkList([]int{1,2,3,4,5}))
	fmt.Println(reverseList(createLinkList([]int{1,2,3,4,5})))
	fmt.Println('o' - 'a')
}
