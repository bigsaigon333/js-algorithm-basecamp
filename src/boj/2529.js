const input = () => {
  const [N, line] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return [Number(N), line.split(" ")];
};

const operate = (a, b, op) => (op === ">" ? a > b : a < b);

const compute = (k, ops) => {
  let max = -Infinity;
  let min = Infinity;
  const rec = (R, selected, left) => {
    if (R === k + 1) {
      const num = Number(selected.join(""));
      max = Math.max(max, num);
      min = Math.min(min, num);
      return;
    }

    for (const next of left) {
      if (R === 0 || operate(selected[selected.length - 1], next, ops[R - 1])) {
        rec(
          R + 1,
          [...selected, next],
          left.filter((l) => l !== next)
        );
      }
    }
  };

  rec(
    0,
    [],
    Array(10)
      .fill()
      .map((_, i) => i)
  );

  return [max, min].map((n) => n.toString().padStart(k + 1, "0")).join("\n");
};

console.log(compute(...input()));
