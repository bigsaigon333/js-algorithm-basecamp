const input = () => {
  const [, ...lines] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return lines;
};

const convert = (line) => {
  return line
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
};

const compute = (lines) => {
  return lines.map(convert).join("\n");
};

console.log(compute(input()));
