const matrix = [
  [1, 14, 7, 13, 6],
  [8, 11, 3, 15, 9],
  [5, 12, 2, 10, 4],
];
let highestValue = matrix[0][0];
let row = 0;
let column = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] > highestValue) {
      highestValue = matrix[i][j];
      row = i;
      column = j;
    }
  }
}

console.log("Row Index:", row);
console.log("Column Index:", column);
console.log("Highest Value:", matrix[row][column]);
