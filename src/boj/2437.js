const input = () => {
  return require("fs")
    .readFileSync(0, "utf8")
    .trim()
    .split("\n")
    .pop()
    .split(" ")
    .map(Number);
};

const compute = (nums) => {
  nums.sort((a, b) => a - b);

  const arr = [-1];

  const rec2 = (level) => {
    if (level === nums.length) {
      console.log(arr);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == null) continue;
      if (arr[i] !== level - 1) continue;

      for (const n of nums) {
        arr[i + n] = level;
      }
    }

    console.log(arr);

    rec2(level + 1);
  };

  rec2(0);

  // const rec = (i, cases) => {
  //   if (i === nums.length) {
  //     return cases.length;
  //   }

  //   const next = [...new Set([...cases, ...cases.map((n) => n + nums[i])])];

  //   if (next[next.length - 1] > next.length - 1) {
  //     const j = next.findIndex((n, i) => n !== i) - 1;
  //     return next[j] + 1;
  //   }

  //   return rec(i + 1, next);
  // };

  // return rec(0, [0]);
};

console.log(compute(input()));
