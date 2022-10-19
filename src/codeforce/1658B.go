package main

import "fmt"

const MOD = 998244353

func main() {
	var T int

	fmt.Scanf("%d", &T)

	var ans = make([]int, T)
	for i := 0; i < T; i++ {
		var n int
		fmt.Scanf("%d", &n)

		ans[i] = solve(n) % MOD
	}

	fmt.Println(ans)
}

func solve(n int) int {

	var visited = make([]bool, n+1)

	for i := range visited {
		visited[i] = false
	}

	var count int

	var recCount int

	var recursive func(int, int)
	recursive = func(pcd int, level int) {
		// fmt.Println(recCount)
		recCount++

		if level > n {
			count++
			return
		}

		for i := 1; i <= n; i++ {
			if visited[i] {
				continue
			}

			var cd int
			if level == 1 {
				cd = i
			} else {
				cd = gcd(i*level, pcd)
			}

			if cd == 1 {
				continue
			}

			visited[i] = true
			recursive(cd, level+1)
			visited[i] = false
		}
	}

	recursive(0, 1)

	// fmt.Println(count)

	return count
}

type Pair struct {
	x int
	y int
}

var cache = map[Pair]int{}

var gcdCount int

func gcd(a int, b int) int {
	fmt.Println(gcdCount, a, b)
	gcdCount++

	if a < b {
		a, b = b, a
	}

	if cache[Pair{a, b}] != 0 {
		return cache[Pair{a, b}]
	}

	if b == 1 {
		return 1
	}

	if a%b == 0 {
		return b
	}

	cache[Pair{a, b}] = gcd(b, a%b)

	return cache[Pair{a, b}]
}
