const input = () => require("fs").readFileSync(0, "utf8").trim();

const compute = (word) => {
  const counts = new Map();
  for (const char of word.toUpperCase()) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  const max = Math.max(...counts.values());
  const filtered = [...counts].filter(([, value]) => value === max);

  return filtered.length >= 2 ? "?" : filtered[0][0].toUpperCase();
};

console.log(compute(input()));
