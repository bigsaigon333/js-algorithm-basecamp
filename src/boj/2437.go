package main

import (
	"bufio"
	"os"
	"sort"
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

	var N = scanInt()
	var nums = make([]int, N)
	for i := 0; i < N; i++ {
		nums[i] = scanInt()
	}
	sort.Ints(nums)

	wr.WriteString(strconv.Itoa(rec(nums, 1, 0)))
}

func rec(arr []int, next, k int) int {
	if k >= len(arr) || arr[k] > next {
		return next
	}

	return rec(arr, next+arr[k], k+1)
}
