const getLine = (() => {
  const lines = require("fs").readFileSync(0, "utf8").trim().split("\n");

  let i = 0;
  return () => lines[i++];
})();

const run = () => {
  console.log(
    Array(Number(getLine()))
      .fill()
      .map(() => Array(Number(getLine())).fill().map(getLine))
      .map(compute)
      .join("\n")
  );
};

const isConsistent = (s1, s2) =>
  Array(Math.min(s1.length, s2.length))
    .fill()
    .map((_, i) => i)
    .some((i) => s1[i] !== s2[i]);

const compute = (nums) => {
  nums.sort((a1, a2) => a1.localeCompare(a2));

  return Array(nums.length - 1)
    .fill()
    .map((_, i) => i)
    .every((i) => isConsistent(nums[i], nums[i + 1]))
    ? "YES"
    : "NO";
};

run();
