const input = () => {
  const [head, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  const [N, M] = head.split(" ").map(Number);

  const board = lines.map((line) => line.split(""));

  const coins = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "o") {
        coins.push([i, j]);
      }
    }
  }

  return [N, M, board.map((arr) => arr.map((c) => c !== "#")), coins];
};

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const INITIAL = 10 + 1;

const compute = (N, M, board, coins) => {
  const isInRange = (x, y) => x >= 0 && x < N && y >= 0 && y < M;
  const move = (x, y, dx, dy) => {
    const [nx, ny] = [x + dx, y + dy];

    return !isInRange(nx, ny) || board[nx][ny] ? [nx, ny] : [x, y];
  };

  let min = 10 + 1;
  const recursive = (level, cx1, cy1, cx2, cy2) => {
    if (level >= min) return;

    if (!isInRange(cx1, cy1) && !isInRange(cx2, cy2)) return;

    if (
      (!isInRange(cx1, cy1) && isInRange(cx2, cy2)) ||
      (isInRange(cx1, cy1) && !isInRange(cx2, cy2))
    ) {
      min = Math.min(min, level);
      return;
    }

    for (const [dx, dy] of dir) {
      recursive(
        level + 1,
        ...move(cx1, cy1, dx, dy),
        ...move(cx2, cy2, dx, dy)
      );
    }
  };

  recursive(0, ...coins.flat());

  return min === INITIAL ? -1 : min;
};

console.log(compute(...input()));
