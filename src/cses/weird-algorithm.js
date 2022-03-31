let n = Number(require("fs").readFileSync(0, "utf8"));

const ans = [n];
while (n > 1) {
  n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  ans.push(n);
}

console.log(ans.join(" "));
