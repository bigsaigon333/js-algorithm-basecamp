const input = () =>
  require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.trim().split(" ").map(Number))
    .flat();

const CLOCKS_COUNT = 9;

const toArr = (str) =>
  str
    .split("")
    .map((c) => c.charCodeAt(0) - "A".charCodeAt(0))
    .reduce((acc, i) => ((acc[i] = 1), acc), Array(CLOCKS_COUNT).fill(0));

const moves = [
  "ABDE",
  "ABC",
  "BCEF",
  "ADG",
  "BDEFH",
  "CFI",
  "DEGH",
  "GHI",
  "EFHI",
].map(toArr);

const compute = (clocks) => {
  console.log(moves);
};

console.log(compute(input()));
