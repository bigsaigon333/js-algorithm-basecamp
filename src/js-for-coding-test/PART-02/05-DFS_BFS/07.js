// 행(Row)이 3개인 2차원 배열로 인접 리스트 표현
const graph = Array(3)
  .fill(0)
  .map(() => []);

// 노드 0에 연결된 노드 정보 저장(노드, 거리)
graph[0].push([1, 7]);
graph[0].push([2, 5]);

// 노드 1에 연결된 노드 정보 저장(노드, 거리)
graph[1].push([0, 7]);

// 노드 2에 연결된 노드 정보 저장(노드, 거리)
graph[2].push([0, 5]);

console.log(graph); // [ [ [ 1, 7 ], [ 2, 5 ] ], [ [ 0, 7 ] ], [ [ 0, 5 ] ] ]
