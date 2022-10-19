/**
 * 무게의 합계가 1~15,000 이라는 점에 착안해서 트리키하게 문제를 풀었다고 생각했다.
 * 문제를 풀고나니 dp 라는걸 알게되었다.
 * 어떤게 부분문제이지? 처음에 고민했었지만 제대로 파악하지 못해 dp가 아니라고 단정지어버렸다.
 * 순서가 상관이 없다. 전 스테이지에서 나온 숫자에서 해당 숫자를 더하거나 빼거나 아무것도 안하거나.
 */

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const N = +input[0];
const n = input[1].split(" ").map(Number);
const tc = input[3].split(" ").map(Number);

const MAX_WEIGHT = 500;

const cache = Array(N * MAX_WEIGHT + 1).fill(false);
cache[0] = true;

const rec = (i, m) => {
  if (i === N) {
    return;
  }

  if (cache[m]) return;

  cache[m + n[i]] = true;
  rec(i + 1, m + n[i]);
  cache[Math.abs(m - n[i])] = true;
  rec(i + 1, Math.abs(m - n[i]));
  cache[m] = true;
  rec(i + 1, m);
};

console.log(tc.map((t) => (cache[t] ? "Y" : "N")).join(" "));
