/*
단순한 방법부터 접근한다
사이드 이펙트가 없는 방법을 생각한다
최적화한다

각 문자의 위치의 값을 배열에 저장한 후 마지막에 최대값을 구하였다.
10**6 에서 콜스택 오버플로우가 발생하였다. (Math.max가 내부적으로 재귀를 사용한다는 것도 이번에 처음 알았다)

선형적으로 최대값을 찾을 수 있다는 걸 깨닫고 난후 배열을 제거하고 바로 최대값을 기록하게끔 수정
 */

const str = require("fs").readFileSync(0, "utf8").trim();

const solve = (str) => {
  let max = 1;
  let len = 1;
  for (let i = 1; i < str.length; i++) {
    len = str[i - 1] === str[i] ? len + 1 : 1;

    max = Math.max(max, len);
  }

  return max;
};

console.log(solve(str));
