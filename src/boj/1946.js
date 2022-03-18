const getLine = (() => {
  const lines = require("fs").readFileSync(0, "utf8").trim().split("\n");

  let i = 0;
  return () => lines[i++];
})();

const run = () => {
  console.log(
    Array(Number(getLine()))
      .fill()
      .map(() =>
        Array(Number(getLine()))
          .fill()
          .map(getLine)
          .map((line) => line.split(" ").map(Number))
      )
      .map(compute)
      .join("\n")
  );
};

const compute = (nums) =>
  nums
    .sort(([a1], [a2]) => a1 - a2)
    .map(([, b]) => b)
    .reduce(
      ([count, prev], curr) => [
        count + (prev > curr ? 1 : 0),
        Math.min(prev, curr),
      ],
      [0, Infinity]
    )[0];

run();
