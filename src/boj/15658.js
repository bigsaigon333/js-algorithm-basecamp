const input = () => {
  const [N, lineA, lineOp] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [
    Number(N),
    lineA.split(" ").map(Number),
    lineOp.split(" ").map(Number),
  ];
};

const operate = (a, b, op) => {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return Math.trunc(a / b);

  throw new Error("Invalid operator");
};

const compute = (N, A, ops) => {
  let max = -Infinity;
  let min = Infinity;

  const rec = (level, acc, plus, minus, times, divide) => {
    if (level === N) {
      max = Math.max(max, acc);
      min = Math.min(min, acc);
      return;
    }

    if (plus > 0) {
      rec(
        level + 1,
        operate(acc, A[level], "+"),
        plus - 1,
        minus,
        times,
        divide
      );
    }

    if (minus > 0) {
      rec(
        level + 1,
        operate(acc, A[level], "-"),
        plus,
        minus - 1,
        times,
        divide
      );
    }

    if (times > 0) {
      rec(
        level + 1,
        operate(acc, A[level], "*"),
        plus,
        minus,
        times - 1,
        divide
      );
    }

    if (divide > 0) {
      rec(
        level + 1,
        operate(acc, A[level], "/"),
        plus,
        minus,
        times,
        divide - 1
      );
    }
  };

  rec(1, A[0], ...ops);

  return { max, min };
};

const { max, min } = compute(...input());
console.log(String(max));
console.log(String(min));
