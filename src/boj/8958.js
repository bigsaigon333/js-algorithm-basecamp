const input = () => {
  const [T, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [T, lines];
};

const strToScore = (count) => (count * (count + 1)) / 2;

const add = (a, b) => a + b;

const getScore = (line) => {
  return line
    .split("X")
    .map((str) => strToScore(str.length))
    .reduce(add, 0);
};

const compute = (T, lines) => {
  return lines.map(getScore).join("\n");
};

console.log(compute(...input()));
