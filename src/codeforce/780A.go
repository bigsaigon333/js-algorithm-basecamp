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

func main() {
	defer wr.Flush()

	for T := scanInt(); T > 0; T-- {
		a, b := scanInt(), scanInt()
		if a == 0 {
			fmt.Fprintln(wr, 1)
		} else {
			fmt.Fprintln(wr, a+b*2+1)
		}
	}
}
