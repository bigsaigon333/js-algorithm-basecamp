/*
처음에는 단순히 BFS Flood Fill으로 풀 수 있을거라 생각하였다
그러나 뱀과 사다리는 거리 +1 을 하지 않는다는것을 깨닫고 나서
next가 뱀 또는 사다리에 이동하면 next를 변경해주는 로직을 추가하여 문제를 해결
*/

package main

import (
	"bufio"
	"container/list"
	"fmt"
	"os"
	"strconv"
)

var (
	sc *bufio.Scanner
	wr *bufio.Writer
)

func init() {
	sc = bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	wr = bufio.NewWriter(os.Stdout)
}

func scanInt() int {
	sc.Scan()
	n, _ := strconv.Atoi(sc.Text())
	return n
}

const LEN = 100

func main() {
	defer wr.Flush()

	N := scanInt()
	M := scanInt()

	var b = map[int]int{}
	for i := 0; i < N+M; i++ {
		b[scanInt()] = scanInt()
	}

	visited := [LEN + 1]bool{}
	count := [LEN + 1]int{}
	q := list.New()
	q.PushBack(1)
	visited[1] = true

	for q.Len() > 0 {
		el := q.Front()
		q.Remove(el)
		curr := el.Value.(int)

		for i := 1; i <= 6; i++ {
			next := curr + i
			if next > LEN {
				continue
			}
			if n, ok := b[next]; ok {
				next = n
			}
			if visited[next] {
				continue
			}
			visited[next] = true
			count[next] = count[curr] + 1
			if next == LEN {
				break
			}
			q.PushBack(next)

		}
	}

	fmt.Fprintln(wr, count[LEN])
}
