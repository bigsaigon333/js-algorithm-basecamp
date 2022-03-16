const input = () => {
  const [N, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [Number(N), lines];
};

const toEntries = (word) =>
  word
    .split("")
    .reverse()
    .map((c, i) => [c, 10 ** i]);

const compute = (N, words) => {
  const map = new Map();

  const add = ([key, value]) => {
    map.set(key, (map.get(key) || 0) + value);
  };

  words.map(toEntries).forEach((entries) => entries.forEach(add));

  return [...map.values()]
    .sort((a, b) => b - a)
    .reduce((acc, curr, i) => acc + curr * (9 - i), 0);
};

console.log(compute(...input()));
