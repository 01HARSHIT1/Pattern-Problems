// Code for Spiral Matrix

let n = 3;
let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let num = 1;
matrix[0][0] = num++;
matrix[0][1] = num++;
matrix[0][2] = num++;
matrix[1][2] = num++;
matrix[2][2] = num++;
matrix[2][1] = num++;
matrix[2][0] = num++;
matrix[1][0] = num++;
matrix[1][1] = num++;
for (let i = 0; i < n; i++) {
  console.log(matrix[i].join(" "));
}
