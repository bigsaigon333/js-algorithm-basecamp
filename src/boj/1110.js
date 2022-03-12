const input = () => {
  return Number(require("fs").readFileSync(0, "utf8").trim());
};

const next = (N) => {
  const [a, left] = N.toString().padStart(2, "0");
  const right = (Number(a) + Number(left)) % 10;

  return 10 * left + right;
};

const compute = (N) => {
  let count = 1;
  let curr = next(N);
  while (curr !== N) {
    curr = next(curr);
    count += 1;
  }

  return count;
};

console.log(compute(input()));
