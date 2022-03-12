const input = () => {
  const [, line] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return line.split(" ").map(Number);
};

const compute = (nums) => {
  const counts = new Map();
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const answer = Array(nums.length).fill(-1);

  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length > 0 &&
      counts.get(nums[stack[stack.length - 1]]) < counts.get(nums[i])
    ) {
      answer[stack.pop()] = nums[i];
    }

    stack.push(i);
  }

  return answer.join(" ");
};

console.log(compute(input()));
