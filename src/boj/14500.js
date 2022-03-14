const input = () => {
  const [head, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  const [N, M] = head.split(" ").map(Number);

  const board = lines.map((line) => line.split(" ").map(Number));

  return [N, M, board];
};

const compute = (N, M, board) => {
  const isInRange = (x, y) => x >= 0 && x < N && y >= 0 && y < M;

  const size = (x, y) =>
    [
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, -1],
        [1, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, -1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [1, -1],
        [2, -1],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, -1],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, -1],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [-1, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
      ],
    ]
      .map((arr) => arr.map(([dx, dy]) => [x + dx, y + dy]))
      .filter((arr) => arr.every(([nx, ny]) => isInRange(nx, ny)))
      .map((arr) =>
        arr.map(([nx, ny]) => board[nx][ny]).reduce((a, b) => a + b)
      )
      .reduce((a, b) => Math.max(a, b), -Infinity);

  let max = -Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      max = Math.max(max, size(i, j));
    }
  }

  return max;
};

console.log(compute(...input()));
