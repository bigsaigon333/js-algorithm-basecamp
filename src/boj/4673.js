const d = (n) =>
  n +
  n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

const MAX = 10_000;

const compute = () => {
  const sieve = new Set(
    Array(MAX)
      .fill()
      .map((_, i) => i + 1)
  );

  for (let n = 1; n <= MAX; n++) {
    sieve.delete(d(n));
  }

  const answer = [...sieve].sort((a, b) => a - b).join("\n");

  return answer;
};

console.log(compute());
