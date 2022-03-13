const input = () => require("fs").readFileSync(0, "utf8").trim();

const compute = (line) => line.split(" ").filter((word) => word !== "").length;

console.log(compute(input()));
