/**
 * JS가 공간복잡도에서 무조건 손해일 수 밖에 없는게, I/O 를 동기로 처리하면 input을 모두 저장해야하므로
 * 비동기로 처리하였을 때 실제로 메모리사용량이 줄어드는지 확인 필요
 */

const getLine = (() => {
  const input = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .reverse();

  return () => input.pop();
})();

const input = () => (getLine(), getLine().split(" ").map(Number));

const solve = (nums) => {
  let sum = -Infinity;
  let max = -Infinity;

  for (const n of nums) {
    sum = Math.max(sum + n, n);
    max = Math.max(max, sum);
  }

  return max;
};

console.log(
  Array(+getLine())
    .fill()
    .map(input)
    .map(solve)
    .join("\n")
);
