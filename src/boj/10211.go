/*
가장 단순한 문제풀이법에서 시작한다. O(N**2)
그다음 시간 최적화를 고민한다 (O(N))
공간복잡도를 줄인다
내가 풀고자 하는 기법에 너무 끼워맞추려고 하지 않는다(어떻게든 재귀쓰려고 했으나.. 왜 굳이..?)

bufio 를 쓰면 io 가 빨리 된다. 왜 그런지 공부 필요
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

func main() {
	defer wr.Flush()

	for t := scanInt(); t > 0; t-- {
		fmt.Println(solve(input()))
	}
}

func scanInt() int {
	sc.Scan()
	n, _ := strconv.Atoi(sc.Text())
	return n
}

func input() []int {
	var N = scanInt()
	var nums = make([]int, N)
	for i := 0; i < N; i++ {
		nums[i] = scanInt()
	}

	return nums
}

const MIN = -20000

func solve(arr []int) int {
	var sum, ans = MIN, MIN
	for _, n := range arr {
		sum = max(sum+n, n)
		ans = max(ans, sum)
	}

	return ans
}

func max(a int, b int) int {
	if a < b {
		return b
	}

	return a
}
