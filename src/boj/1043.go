/*
  N, M <= 50 에 착안해서 왠만하면 브루트 포스로도 풀릴거라 생각
  비트연산자를 써서 숫자를 비트 자리수에 할당하는게 한번에 여러 숫자가 포함되어 있는지 검사하는게 간단하다고 판단
	그래프이론으로는 어떻게 풀 수 있을지 궁금하다
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

	_, M := scanInt(), scanInt()

	var X int
	for i := scanInt(); i > 0; i-- {
		X |= 1 << scanInt()
	}

	arr := make([]int, M)
	for i := 0; i < M; i++ {
		for j := scanInt(); j > 0; j-- {
			arr[i] |= 1 << scanInt()
		}
	}

	for i := 0; i < M; {
		if arr[i]&X != arr[i] && arr[i]&X != 0 {
			X |= arr[i]
			i = 0
			continue
		}

		i++
	}

	var count int
	for _, a := range arr {
		if X&a == 0 {
			count++
		}
	}

	fmt.Fprintln(wr, count)
}
