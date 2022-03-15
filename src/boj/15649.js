const input = () =>
  require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const perm = (N, M) => {
  if (N < M) return [];
  if (M === 1)
    return Array(N)
      .fill()
      .map((_, i) => [i + 1]);

  return [
    ...perm(N - 1, M),
    ...perm(N - 1, M - 1).flatMap((arr) =>
      Array(arr.length + 1)
        .fill()
        .map((_, i) => i)
        .map((i) => [...arr.slice(0, i), N, ...arr.slice(i)])
    ),
  ];
};

const compare = (as, bs, ai = 0, bi = 0) => {
  if (ai === ai.length) return 0;

  return as[ai] - bs[bi] === 0
    ? compare(as, bs, ai + 1, bi + 1)
    : as[ai] - bs[bi];
};

const compute = (N, M) => {
  return perm(N, M)
    .sort(compare)
    .map((arr) => arr.join(" "))
    .join("\n");
};

console.log(compute(...input()));
