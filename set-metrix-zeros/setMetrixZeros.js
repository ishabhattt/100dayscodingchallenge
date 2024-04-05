function setZerosMatrix(arr) {
  const rows = new Set();
  const cols = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(setZerosMatrix(matrix));

// time complexity O(m*n)
//space complexity O(m+n)
