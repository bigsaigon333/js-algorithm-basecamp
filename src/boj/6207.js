const getLine = () => {
  const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
  let i = 0;
  return () => input[i++];
};

const run = () => {
  const [K, N, M] = getLine().split(" ").map(Number);
};
