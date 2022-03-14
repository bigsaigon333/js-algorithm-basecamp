const input = () => {
  const [N, W] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return [Number(N), W.split(" ").map(Number)];
};

const compute = (N, W) => {
  let max = -Infinity;

  const recursive = (arr, level, acc) => {
    if (level === N - 2) {
      max = Math.max(max, acc);
      return;
    }

    for (let i = 1; i < arr.length - 1; i++) {
      recursive(
        arr.filter((_, j) => j !== i),
        level + 1,
        acc + arr[i - 1] * arr[i + 1]
      );
    }
  };

  recursive(W, 0, 0);

  return max;
};

console.log(compute(...input()));
