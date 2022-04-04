/*
  1. 완전 탐색(O(500_000))으로 문제 해결
  2. 최적화를 고민한다
		- N 에서 시작해서 역으로 출발지점으로 돌아가는 방법을 upper, lower 두가지로 한다
		- string 관련 메서드(Itoa, ContainsAny) 숫자를 다루는 것보다 3배 정도 느리다
*/

package main

import (
	"bufio"
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

type Point struct {
	X int
	Y int
}

const MAX = 5000000

func abs(n int) int {
	if n < 0 {
		return -n
	}

	return n
}

func digit(n int) int {
	count := 0
	for n >= 0 {
		n /= 10
		count++
		if n == 0 {
			break
		}
	}

	return count
}

var impossible = make([]bool, 10)

func isPossible(n int) bool {
	for n >= 0 {
		c := n % 10
		if impossible[c] {
			return false
		}
		n /= 10
		if n == 0 {
			break
		}
	}

	return true
}

func main() {
	defer wr.Flush()

	N := scanInt()
	M := scanInt()

	for i := 0; i < M; i++ {
		impossible[scanInt()] = true
	}

	ans := abs(N - 100)

	if isPossible(N) && ans > digit(N) {
		ans = digit(N)
	}

	for upper := N + 1; upper <= MAX; upper++ {
		if !isPossible(upper) {
			continue
		}
		if tmp := digit(upper) + abs(N-upper); ans > tmp {
			ans = tmp
			break
		}
	}

	for lower := N - 1; lower >= 0; lower-- {
		if !isPossible(lower) {
			continue
		}
		if tmp := digit(lower) + abs(N-lower); ans > tmp {
			ans = tmp
			break
		}
	}

	fmt.Fprintln(wr, ans)
}
