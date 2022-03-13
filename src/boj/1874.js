const input = () => {
  const [N, ...nums] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map(Number);

  return [N, nums];
};

const compute = (N, nums) => {
  const answer = [];

  let pos = 0;
  const stack = [];
  for (let n = 1; n <= N; n++) {
    answer.push("+");
    stack.push(n);

    while (
      pos < N &&
      stack.length > 0 &&
      stack[stack.length - 1] === nums[pos]
    ) {
      stack.pop();
      answer.push("-");
      pos++;
    }
  }

  return stack.length > 0 ? "NO" : answer.join("\n");
};

console.log(compute(...input()));
