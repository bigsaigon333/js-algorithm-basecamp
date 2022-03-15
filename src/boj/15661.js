const input = () => {
  const [N, ...lines] = require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n");

  return [Number(N), lines.map((line) => line.split(" ").map(Number))];
};

const compute = (N, S) => {
  const sum = (team) => {
    let result = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        result += S[team[i]][team[j]] + S[team[j]][team[i]];
      }
    }

    return result;
  };

  let min = Infinity;
  const ours = [];
  const theirs = [];
  const recursive = (K) => {
    if (K === N) {
      if (ours.length === 0 || theirs.length === 0) return;
      const diff = Math.abs(sum(ours) - sum(theirs));
      min = Math.min(min, diff);
      return;
    }

    ours.push(K);
    recursive(K + 1);
    ours.pop();

    theirs.push(K);
    recursive(K + 1);
    theirs.pop();
  };

  recursive(0);

  return min;
};

console.log(compute(...input()));
