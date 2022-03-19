const input = () => {
  const [N, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [Number(N), lines.map((line) => line.split(" ").map(Number))];
};

const min = (nums, indicies) =>
  Math.min(...indicies.map((i, j) => nums[i][j]).filter(Boolean));

const findIndex = (nums, indicies, target) =>
  indicies.findIndex((i, j) => nums[i][j] === target);

const compute = (N, arr) => {
  const indicies = Array(N).fill(0);

  return Array(N)
    .fill()
    .reduce(() => {
      const m = min(arr, indicies);
      const i = findIndex(arr, indicies, m);
      indicies[i]++;

      return m;
    }, 0);
};

console.log(compute(...input()));
