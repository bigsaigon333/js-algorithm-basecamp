const input = () => {
  const [N, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [Number(N), lines.map((line) => line.split(" ").map(Number))];
};

const heappush = (hq, target) => {
  hq.push(target);

  const bubbleUp = (ci) => {
    if (ci <= 0) return;

    const pi = Math.floor((ci - 1) / 2);
    if (hq[pi] < hq[ci]) {
      [hq[pi], hq[ci]] = [hq[ci], hq[pi]];
      bubbleUp(pi);
    }
  };

  bubbleUp(hq.length - 1);
};

const heappop = (hq) => {
  if (hq.length === 1) return hq.pop();

  const top = hq[0];
  [hq[0], hq[hq.length - 1]] = [hq[hq.length - 1], hq[0]];
  hq.pop();

  const trickleDown = (pi) => {
    const lci = pi * 2 + 1;
    const rci = pi * 2 + 2;

    if (lci >= hq.length) return;

    const mci = rci < hq.length && hq[rci] > hq[lci] ? rci : lci;

    if (hq[mci] > hq[pi]) {
      [hq[mci], hq[pi]] = [hq[pi], hq[mci]];
      trickleDown(mci);
    }
  };

  trickleDown(0);

  return top;
};

const compute = (N, arr) => {
  const heapq = [];

  arr.flat().forEach((el) => heappush(heapq, el));

  return Array(N)
    .fill()
    .reduce(() => heappop(heapq), 0);
};

console.log(compute(...input()));
