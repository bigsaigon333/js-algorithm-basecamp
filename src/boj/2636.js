/**
 * 가장 외곽은 항상 0 이라는 점에서 착안하여 (0,0) 에서부터 BFS 로 접점을 처리하였다
 * 큐를 사용하다보니 공간복잡도 측면에서 손해를 볼 수도 있으므로 큐를 사용하지 않는 방법을 항상 고민할 필요가 있을지도..
 * 원래는 큐에 넣기 전에 방문처리를 하는 것이 맞으나, 접점의 board값을 바꿔버리면서 또 접근하는 일을 막기 위해 큐에 넣지 않는 접점에서도 방문처리를 하였다
 */

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(" ").map(Number));

const bfs = () => {
  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));
  const q = [];
  let head = 0;
  let count = 0;

  q.push([0, 0]);
  visited[0][0] = true;
  while (q.length - head > 0) {
    const [cx, cy] = q[head++];

    for (const [dx, dy] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const [nx, ny] = [cx + dx, cy + dy];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue;
      visited[nx][ny] = true;
      if (board[nx][ny] === 0) {
        q.push([nx, ny]);
      } else {
        board[nx][ny] = 0;
        count++;
      }
    }
  }

  return count;
};

// eslint-disable-next-line no-constant-condition
for (let i = 1; true; i++) {
  const curr = bfs();
  if (board.every((row) => row.every((n) => n === 0))) {
    console.log(i);
    console.log(curr);
    break;
  }
}
