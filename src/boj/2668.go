/*
완전 탐색으로는 2^1000 을 구해낼 수 없다
방향그래프인것을 깨닫고 모든 사이클을 계산해 내는 문제로 생각을 전환하다
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

func main() {
	defer wr.Flush()

	N := scanInt()
	g := make([]int, N+1)
	for i := 1; i <= N; i++ {
		g[i] = scanInt()
	}

	var ans = make([]bool, N+1)
	for start := 1; start <= N; start++ {
		if ans[start] {
			continue
		}
		visited := make([]bool, N+1)
		var s = list.New()
		s.PushBack(start)
		for s.Len() > 0 {
			el := s.Back()
			s.Remove(el)
			curr := el.Value.(int)

			if visited[curr] {
				if curr == start {
					for i, b := range visited {
						ans[i] = ans[i] || b
					}
				}
				continue
			}

			visited[curr] = true
			s.PushBack(g[curr])
		}
	}

	count := 0
	for _, b := range ans {
		if b {
			count++
		}
	}
	fmt.Fprintln(wr, count)

	for i, b := range ans {
		if b {
			fmt.Fprintln(wr, i)
		}
	}
}
