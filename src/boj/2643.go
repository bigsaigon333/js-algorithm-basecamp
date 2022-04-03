/*
완전 탐색: 2^100 * 100! 절대 불가
그리디도 불가. 탐욕적 선택속성이 성립하지 않는다. 탐욕적 선택을 해서 손해를 보기 때문에
동적계획법 생각 -> 부분문제를 어떻게 나누지?
자식 상태가 부모 상태에 의존하지 않는 점에 착안하여 메모이제이션 적용

메모이제이션 아닌 반복적 동적계획법으로도 간단하게 풀 수 있을 것 같다
*/

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

type Point struct {
	X int
	Y int
}

const MAX = 1000

func main() {
	defer wr.Flush()

	var N = scanInt()
	var p = make([]Point, N)
	for i := 0; i < N; i++ {
		if x, y := scanInt(), scanInt(); x > y {
			p[i] = Point{x, y}
		} else {
			p[i] = Point{y, x}
		}
	}

	sort.Slice(p, func(i, j int) bool {
		if p[i].X != p[j].X {
			return p[i].X > p[j].X
		}

		return p[i].Y > p[j].Y
	})

	var cache = make([]int, N)

	var rec func(int) int
	rec = func(k int) int {

		if k == N {
			return 0
		}

		if cache[k] > 0 {
			return cache[k]
		}

		max := 0
		for i := k + 1; i < N; i++ {
			if p[i].X > p[k].X || p[i].Y > p[k].Y {
				continue
			}

			if val := rec(i); max < val {
				max = val
			}
		}

		cache[k] = max + 1
		return cache[k]
	}

	var ans int
	for i := 0; i < N; i++ {
		if val := rec(i); val > ans {
			ans = val
		}
	}

	fmt.Fprintln(wr, ans)

}
