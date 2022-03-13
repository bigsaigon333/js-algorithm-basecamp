const input = () =>
  require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const compute = (N, K) => {
  const answer = [];

  const queue = Array(N)
    .fill()
    .map((_, i) => i + 1);
  let head = 0;

  let count = 1;
  while (queue.length - head > 0) {
    const top = queue[head++];

    if (count % K === 0) {
      answer.push(top);
    } else {
      queue.push(top);
    }
    count++;
  }

  return `<${answer.join(", ")}>`;
};

console.log(compute(...input()));
