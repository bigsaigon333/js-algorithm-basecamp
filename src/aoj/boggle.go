package main

import "fmt"

func main() {
	var C int
	var name string
	fmt.Scanf("%d", &C)
	for C > 0 {
		fmt.Scanf("%s", &name)
		fmt.Printf("Hello, %s!\n", name)
		C--
	}
}
