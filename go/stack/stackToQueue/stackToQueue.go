package main

import "fmt"

// CQueue
//  @Description: 使用两个栈实现队列
//
type CQueue struct {
	stack1 []int
	stack2 []int
}
func Constructor() CQueue {
	return  CQueue{
	}
}
func (cq *CQueue)AppendTail(value int)  {
	cq.stack1 = append(cq.stack1,value)
}

func (cq *CQueue)DeleteHead() (res int) {
	if len(cq.stack2) == 0 {
		// 如果栈2没有数据了，那么需要从栈1添加元素
		for len(cq.stack1) > 0 {
			cq.stack2 = append(cq.stack2,cq.stack1[len(cq.stack1) -1])
			cq.stack1 = cq.stack1[:len(cq.stack1) -1]
		}
	}
	if len(cq.stack2) == 0 {
		// 栈1和栈2都没有元素了
		return -1
	}else {
		// 从栈2弹出最后一个元素
		lastOne := cq.stack2[len(cq.stack2)-1]
		cq.stack2 =  cq.stack2[:len(cq.stack2)-1]
		return lastOne
	}

}


func main() {
	queue := Constructor()
	var res []int
	for i := 0; i < 6; i++ {
		queue.AppendTail(i)
	}
	for i := 0; i < 6; i++ {
		res = append(res,queue.DeleteHead())
	}
	fmt.Println(res)
}
