const input = () => {
  const [, ...words] = require("fs").readFileSync(0, "utf8").trim().split("\n");

  return words;
};

const isGroupWord = (word) => {
  const matched = word.match(/(?<prev>.)\k<prev>*/g);

  return new Set(matched.map((str) => str[0])).size === matched.length;
};

const compute = (words) => {
  return words.filter(isGroupWord).length;
};

console.log(compute(input()));
