console.log(
  require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split(" ").map(Number))
    .sort(([x1, y1], [x2, y2]) => x1 - x2 || y1 - y2)
    .map(([x, y]) => `${x} ${y}`)
    .join("\n")
);
