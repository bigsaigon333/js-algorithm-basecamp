package main

import (
	"bufio"
	"fmt"
	"math"
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

func scanStr() string {
	sc.Scan()
	return sc.Text()
}

func main() {
	defer wr.Flush()
	T := scanInt()

	for ; T > 0; T-- {
		n := scanInt()
		dict := make(map[int]int)
		for i := 0; i < n; i++ {
			dict[scanInt()]++
		}

		freq := math.MinInt
		for _, val := range dict {
			if val > freq {
				freq = val
			}
		}

		fmt.Fprintln(wr, solve(n, freq))
	}

}

func solve(n, k int) int {
	var count int
	for k < n {
		count++
		if 2*k >= n {
			count += n - k
			break
		}
		count += k
		k *= 2
	}

	return count
}
