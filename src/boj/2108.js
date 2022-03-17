const input = () => {
  const [N, ...nums] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map(Number);

  return [N, nums];
};

const compute = (N, nums) => {
  nums.sort((a, b) => a - b);

  const map = new Map();

  nums.forEach((n) => map.set(n, (map.get(n) || 0) + 1));

  const maxFreq = Math.max(...[...map.values()]);

  const freq = [...map].filter(([, v]) => v === maxFreq).map(([k]) => k);

  return [
    Math.round(nums.reduce((a, b) => a + b, 0) / N),
    nums[(N - 1) / 2],
    freq.length > 1 ? freq[1] : freq[0],
    nums[N - 1] - nums[0],
  ];
};

console.log(compute(...input()).join("\n"));
