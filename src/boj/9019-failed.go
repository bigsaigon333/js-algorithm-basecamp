/*
너비가 좁고 깊이가 매우 깊은 그래프 형태로 나타낼 수 있다 -> DFS 탐색
계속해서 7% 에서 시간초과가 발생하는데 가능한 low 레벨으로 다 변경하였는데도 계속 초과가 난다..
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

const MOD = 10000
const RADIX = 10
const LEN = 4
const THOUSAND = 1000
const HUNDRED = 100
const TEN = 10

func D(n int) int {
	return (n * 2) % MOD
}

func S(n int) int {
	return (n - 1 + MOD) % MOD
}

func L(n int) int {
	a := n / THOUSAND
	b := (n % THOUSAND) / HUNDRED
	c := (n % HUNDRED) / TEN
	d := n % TEN

	return (b*THOUSAND + c*HUNDRED + d*TEN + a + MOD) % MOD
}

func R(n int) int {
	a := n / THOUSAND
	b := (n % THOUSAND) / HUNDRED
	c := (n % HUNDRED) / TEN
	d := n % TEN

	return (d*THOUSAND + a*HUNDRED + b*TEN + c + MOD) % MOD
}

func main() {
	defer wr.Flush()
	T := scanInt()

	var ans = make([]string, T)
	for i := 0; i < T; i++ {
		ans[i] = solve(scanInt(), scanInt())
	}

	for i := 0; i < T; i++ {
		fmt.Fprintln(wr, ans[i])
	}
}

func solve(A, B int) string {
	var commands = [LEN]byte{'D', 'S', 'L', 'R'}
	var visited [MOD]bool
	var prev [MOD]int
	for i := 0; i < MOD; i++ {
		prev[i] = -1
	}
	var ops [MOD]byte
	var q = list.New()
	q.PushBack(A)
	visited[A] = true

	for q.Len() > 0 {
		head := q.Front()
		q.Remove(head)
		curr := head.Value.(int)
		if curr == B {
			break
		}

		for i, next := range []int{D(curr), S(curr), L(curr), R(curr)} {
			if !visited[next] {
				visited[next] = true
				prev[next] = curr
				ops[next] = commands[i]
				if next == B {
					break
				}
				q.PushBack(next)
			}

		}
	}

	ans := ""
	for n := B; n != -1; n = prev[n] {
		ans = string(ops[n]) + ans
	}

	return ans
}
