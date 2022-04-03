package main

import (
	"bufio"
	"fmt"
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

func bsLeft(arr []int, start, end, target int) int {
	if start > end {
		return start
	}

	mid := (start + end) / 2

	if arr[mid] < target {
		return bsLeft(arr, mid+1, end, target)
	}

	return bsLeft(arr, start, mid-1, target)
}

func bsRight(arr []int, start, end, target int) int {
	if start > end {
		return start
	}

	mid := (start + end) / 2

	if arr[mid] <= target {
		return bsRight(arr, mid+1, end, target)
	}

	return bsRight(arr, start, mid-1, target)
}

func main() {
	defer wr.Flush()

	var n = scanInt()
	var a = make([]int, n)
	var b = make([]int, n)
	var c = make([]int, n)
	var d = make([]int, n)

	for i := 0; i < n; i++ {
		a[i], b[i], c[i], d[i] = scanInt(), scanInt(), scanInt(), scanInt()
	}

	var ab = make([]int, n*n)
	var cd = make([]int, n*n)

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			ab[i*n+j] = a[i] + b[j]
			cd[i*n+j] = -(c[i] + d[j])
		}
	}

	sort.Ints(ab)
	sort.Ints(cd)

	var count int
	for _, t := range ab {
		count += bsRight(cd, 0, n*n-1, t) - bsLeft(cd, 0, n*n-1, t)
	}

	fmt.Fprintln(wr, count)
}
