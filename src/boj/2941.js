const input = () => require("fs").readFileSync(0, "utf8").trim();

const compute = (word) => {
  const replaced = word.replace(/(c=|c-|dz=|d-|lj|nj|s=|z=)/g, 0);

  return replaced.length;
};

console.log(compute(input()));
