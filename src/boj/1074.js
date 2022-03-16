const input = () => {
  return require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
};

const compute = (N, r, c) => {
  const rec = (n, x, y) => {
    if (n === 0) return 0;

    const e = 2 ** (n - 1);
    const X = Math.floor(x / e);
    const Y = Math.floor(y / e);

    return e ** 2 * (2 * X + Y) + rec(n - 1, x % e, y % e);
  };

  return rec(N, r, c);
};

console.log(compute(...input()));
