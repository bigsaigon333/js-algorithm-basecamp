const input = () => {
  const [, line] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return line.split(" ").map(Number);
};

const compute = (scores) => {
  const max = Math.max(...scores);

  const sum = scores
    .map((score) => (score / max) * 100)
    .reduce((a, b) => a + b, 0);

  const average = sum / scores.length;

  return average;
};

console.log(compute(input()));
