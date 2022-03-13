const input = () => require("fs").readFileSync(0, "utf8").trim();

const compute = (word) => {
  const position = new Map();
  for (let i = 0; i < word.length; i++) {
    if (!position.has(word[i])) position.set(word[i], i);
  }

  const answer = [];
  for (const char of "abcdefghijklmnopqrstuvwxyz") {
    answer.push(position.has(char) ? position.get(char) : -1);
  }

  return answer.join(" ");
};

console.log(compute(input()));
