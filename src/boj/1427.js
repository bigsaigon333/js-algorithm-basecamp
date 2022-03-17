console.log(
  require("fs")
    .readFileSync(0, "utf8")
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
