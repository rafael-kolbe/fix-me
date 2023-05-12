const matrix = [
  [1, 14, 7, 13, 6],
  [8, 11, 3, 15, 9],
  [5, 12, 2, 10, 4],
];
let highestValue = matrix[0][0];
let row = 0;
let column = 0;

for (const i = 0; i < matrix.length; i++) {
  for (const j = 0; j < matrix[j].length; j++) {
    if (matrix[j][i] < highestValue) {
      highestValue = matrix[j][i];
    }
    row = i;
    column = j;
  }
}

console.log("Row Index:", row);
console.log("Column Index:", column);
console.log("Highest Value:", matrix[row][column]);

/*  CÓDIGO ORIGINAL DO EXERCÍCIO

const matrix = [
  [1, 14, 7, 13, 6],
  [8, 11, 3, 15, 9],
  [5, 12, 2, 10, 4],
];
let highestValue = matrix[0][0];
let row = 0;
let column = 0;

for (const i = 0; i < matrix.length; i++) {
  for (const j = 0; j < matrix[j].length; j++) {
    if (matrix[j][i] < highestValue) {
      highestValue = matrix[j][i];
    }
    row = i;
    column = j;
  }
}

console.log("Row Index:", row);
console.log("Column Index:", column);
console.log("Highest Value:", matrix[row][column]);

*/
