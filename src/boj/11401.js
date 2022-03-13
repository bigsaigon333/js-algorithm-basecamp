const input = () =>
  require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const P = 1_000_000_007n;

const mod = (a, b) => (a * b) % P;

const power = (a, n) => {
  if (n === 1n) return a;

  const value = power(a, n / 2n) % P;
  return mod(mod(value, value), n % 2n === 1n ? a : 1n);
};

const compute = (N, K) => {
  const a = Array(K)
    .fill()
    .map((_, i) => N - K + 1 + i)
    .map(BigInt)
    .reduce(mod, 1n);

  const b = Array(K)
    .fill()
    .map((_, i) => i + 1)
    .map(BigInt)
    .reduce(mod, 1n);

  return mod(BigInt(a), power(BigInt(b), P - 2n)).toString();
};

console.log(compute(...input()));
