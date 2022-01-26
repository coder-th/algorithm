package main

import "fmt"

type ListNode struct {
	Val int
	Next *ListNode
}

func generateList(arr []int)  *ListNode {
	var head ListNode
	var pre ListNode
	pre = head
	for i := 0; i < len(arr); i++ {
		node := ListNode{Val: arr[i],Next: nil}
		if head.Next == nil {
			head.Next = &node
		}
		if pre.Next == nil {
			pre.Next = &node
		}else {
			pre.Next.Next = &node
			pre = *pre.Next
		}

	}
	return head.Next
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	var head ListNode
	var pre ListNode
	pre = head
	for list1.Next != nil && list2.Next != nil {
		if list1.Val <= list2.Val {
			pre.Next = list1
			list1 = list1.Next
		}else {
			pre.Next = list2
			list2 = list2.Next
		}
		pre = *pre.Next
	}

	if list1.Next == nil {
		pre.Next = list2
	}
	if list2.Next == nil {
		pre.Next = list1
	}
	return head.Next
}

func main() {
	fmt.Println(generateList([]int{0,1,2,3,4,5}))
	var l1,l2 = generateList([]int{1,2,4}),generateList([]int{1,3,4})
	fmt.Println(mergeTwoLists(l1,l2)) // [1,1,2,3,4,4]

}
