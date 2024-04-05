function smallestInt(num) {
  if (num === 1) return 1;

  if (num % 2 === 0 || num % 5 === 0) return -1;

  let counter = "1";
  while (true) {
    if (BigInt(counter) % BigInt(num) === 0n) {
      return counter.length;
    } else {
      counter += "1";
    }
  }
}

console.log(smallestInt(21));
