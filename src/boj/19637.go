/*
* JS에서는 객체 선언이 매우 손쉬웠는데, Go에서는 구조체를 명시적으로 선언해야하니
* Rank를 선언하는게 번거롭게 느껴져서 name 과 value 두개의 배열으로 나누었다
어떤 게 더 좋은 방법일까? 유지보수 관점에서는 구조체가 맞는것 같은데..?
지금은 단순히 인덱스로 둘의 연관관계를 잇고 있는 것이니.
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

func scanStr() string {
	sc.Scan()
	return sc.Text()
}

func main() {
	defer wr.Flush()

	N := scanInt()
	M := scanInt()

	name := make([]string, N)
	value := make([]int, N)
	for i := 0; i < N; i++ {
		name[i] = scanStr()
		value[i] = scanInt()
	}

	search := func(target int) int {
		start := 0
		end := N - 1
		for start <= end {
			mid := (start + end) / 2
			if value[mid] >= target {
				end = mid - 1
			} else {
				start = mid + 1
			}
		}

		return start
	}

	for i := 0; i < M; i++ {
		fmt.Fprintln(wr, name[search(scanInt())])
	}
}
