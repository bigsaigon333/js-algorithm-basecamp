const getLine = (() => {
  const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
  let i = 0;

  return () => input[i++];
})();

const compute = (N, scores) => {
  const sum = scores.reduce((a, b) => a + b, 0);
  const average = sum / N;
  const percentage = scores.filter((score) => score > average).length / N;

  return percentage.toLocaleString("en", {
    style: "percent",
    minimumFractionDigits: 3,
  });
};

const T = Number(getLine());

const answer = Array(T)
  .fill()
  .map(() => {
    const [N, ...scores] = getLine().split(" ").map(Number);

    return compute(N, scores);
  });

console.log(answer.join("\n"));
