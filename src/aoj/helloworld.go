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
		fmt.Fprintf(wr, "Hello, %s!\n", scanStr())
	}
}
