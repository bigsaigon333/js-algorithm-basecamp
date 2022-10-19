package main

import "fmt"

func main() {
	var C int
	fmt.Scanf("%d", &C)

	for i := 0; i < C; i++ {
		var n, m int
		fmt.Scanf("%d %d", &n, &m)
		fmt.Println(n, m)
	}
}
