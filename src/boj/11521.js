/* eslint-disable no-constant-condition */
const getLine = (() => {
  const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
  let i = 0;

  return () => input[i++];
})();

const run = () => {
  const W = Number(getLine());
  const words = Array(W).fill().map(getLine);

  const answer = [];
  while (true) {
    const D = Number(getLine());
    if (D === 0) break;

    const grids = Array(D)
      .fill()
      .map(getLine)
      .map((line) => line.split(""));
    answer.push(...compute(D, grids, words).sort(), "-");
  }

  console.log(answer.join("\n"));
};

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, -1],
  [-1, 1],
];

const isInRange = (i, arr) => i >= 0 && i < arr.length;

const hasWord = (D, grids, x, y, word) => {
  if (!isInRange(x, grids) || !isInRange(y, grids[x])) return false;
  if (grids[x][y] !== word[0]) return false;
  if (word.length <= 1) return true;

  return d
    .map(([dx, dy]) => [x + dx, y + dy])
    .some(([nx, ny]) =>
      hasWord(D, grids, nx, ny, word.slice(word[0] === "q" ? 2 : 1))
    );
};

const foo = (D, grids, word) => {
  for (let i = 0; i < D; i++) {
    for (let j = 0; j < D; j++) {
      if (hasWord(D, grids, i, j, word)) return true;
    }
  }

  return false;
};

const compute = (D, grids, words) =>
  words.filter((word) => foo(D, grids, word));

run();
