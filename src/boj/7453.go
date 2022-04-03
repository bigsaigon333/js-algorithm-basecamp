/*
완전 탐색을 생각했을 때 최대 4000^4 = 2^44 를 탐색해야 하기 때문에 시간내에 불가능하다
하지만 조금 더 생각해보면 A+B = -(C+D) 관계가 항상 성립하기 때문에 4000^4 * 2  로 풀 수 있다는 걸 깨닫게 된다
갯수를 셀때 맵을 이용하는 방법도 있고 이진 탐색을 이용하는 방법도 있다
공간복잡도 측면에서는 이진 탐색이 우수하나, 시간복잡도 측면에서는 맵이 유리하다
공간복잡도가 허용된다면 더 빠른 걸 탐색하는게 PS에서는 타당하다
*/

package main

import (
	"bufio"
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

	var n = scanInt()
	var a = make([]int, n)
	var b = make([]int, n)
	var c = make([]int, n)
	var d = make([]int, n)

	for i := 0; i < n; i++ {
		a[i], b[i], c[i], d[i] = scanInt(), scanInt(), scanInt(), scanInt()
	}

	var ab = make(map[int]int, n*n)

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			ab[a[i]+b[j]] += 1
		}
	}

	var count int
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if v, b := ab[-(c[i] + d[j])]; b {
				count += v
			}
		}
	}

	wr.WriteString(strconv.Itoa(count))

}
