const input = () => {
  return require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
};

const hsearch = (x, y, board) => {
  //
};

const compute = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        continue;
      }

      // 가로 서치
      // 세로 서치
      // 사각형 서치
    }
  }

  return board;
};

console.log(compute(input()));
