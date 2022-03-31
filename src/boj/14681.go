package main

import "fmt"

func main() {
	var x, y int

	fmt.Scanf("%d\n%d", &x, &y)

	var ans int
	if x > 0 {
		if y > 0 {
			ans = 1
		} else {
			ans = 4
		}
	} else {
		if y > 0 {
			ans = 2
		} else {
			ans = 3
		}
	}

	fmt.Println(ans)
}
