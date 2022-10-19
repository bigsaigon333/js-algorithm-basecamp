package main

import "fmt"

func main() {
	var n int
	fmt.Scanf("%d", &n)

	var ans string
	if n == 2 || n%2 == 1 {
		ans = "NO"
	} else {
		ans = "YES"
	}

	fmt.Println(ans)
}
