package main

import "fmt"

const DAY_IN_HOUR = 24
const HOUR_IN_MIN = 60
const DAY_IN_MIN = DAY_IN_HOUR * HOUR_IN_MIN

func main() {
	var H, M int
	fmt.Scanf("%d %d", &H, &M)

	t := (H*HOUR_IN_MIN + M - 45 + DAY_IN_MIN) % DAY_IN_MIN

	h := t / HOUR_IN_MIN
	m := t % HOUR_IN_MIN

	fmt.Printf("%d %d", h, m)
}
