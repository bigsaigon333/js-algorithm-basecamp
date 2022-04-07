/*
BFS 문제인 것은 바로 보고 깨달았다
하지만 문제 자신보다 큰 물고기는 이동할 수 없다는 점을 간과하였다.
이동의 우선순위가 있을 때 정렬을 하였다
일반적으로 방문표시를 하면서 바로 exit 조건임을 검사하여서 중복을 최소화하는데,
우선순위를 정확히 맞추려면 일단 큐에 다 넣은 다음에 정렬을 할 필요가 있어서
방문표시할 때가 아닌 큐에서 꺼낼때 exit 조건을 검사하는 것이 핵심이었다!!
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

func main() {
	defer wr.Flush()

	N := scanInt()

	var shark *[2]int
	board := make([][]int, N)
	for i := range board {
		board[i] = make([]int, N)
		for j := range board[i] {
			if board[i][j] = scanInt(); board[i][j] == 9 {
				shark = &[2]int{i, j}
				board[i][j] = 0
			}
		}
	}

	dx := []int{-1, 0, 0, 1}
	dy := []int{0, -1, 1, 0}

	size := 2
	time := 0

	bfs := func() bool {
		visited := make([][]bool, N)
		for i := range board {
			visited[i] = make([]bool, N)
		}

		q := make([][3]int, 0, N*N)
		q = append(q, [3]int{shark[0], shark[1]})
		visited[shark[0]][shark[1]] = true

		for len(q) > 0 {
			sort.Slice(q, func(i, j int) bool {
				if q[i][2] != q[j][2] {
					return q[i][2] < q[j][2]
				}

				if q[i][0] != q[j][0] {
					return q[i][0] < q[j][0]
				}

				return q[i][1] < q[j][1]
			})
			curr := q[0]
			q = q[1:]

			cx := curr[0]
			cy := curr[1]

			if board[cx][cy] > 0 && board[cx][cy] < size {
				shark[0] = cx
				shark[1] = cy
				time += curr[2]
				board[cx][cy] = 0
				return true
			}

			for i := 0; i < 4; i++ {
				nx := cx + dx[i]
				ny := cy + dy[i]
				if nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny] || board[nx][ny] > size {
					continue
				}
				visited[nx][ny] = true

				q = append(q, [3]int{nx, ny, curr[2] + 1})
			}
		}

		return false
	}

	eaten := 0
	for bfs() {
		eaten++
		if eaten == size {
			size++
			eaten = 0
		}
	}

	fmt.Fprintln(wr, time)
}
