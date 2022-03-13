const input = () => Number(require("fs").readFileSync(0, "utf8").trim());

const compute = (N) => {
  const q = Array(N)
    .fill()
    .map((_, i) => i + 1);
  let head = 0;

  while (q.length - head > 1) {
    head++;
    q.push(q[head++]);
  }

  return q[head];
};

console.log(compute(input()));
