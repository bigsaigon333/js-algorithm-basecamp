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

func scanStr() string {
	sc.Scan()
	return sc.Text()
}

func main() {
	defer wr.Flush()
	T := scanInt()

	for ; T > 0; T-- {
		a, b, c, d := solve(scanInt())
		fmt.Fprintln(wr, a, b, c, d)
	}
}

func solve(n int) (int, int, int, int) {
	return 1, n - 3, 1, 1
}
