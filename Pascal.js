// Code for Pascal’s Triangle

function pascalsTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let value = 1;
    let row = "";
    row += " ".repeat(rows - i - 1);
    for (let j = 0; j <= i; j++) {
      row += value + " ";
      value = value * (i - j) / (j + 1); 
    }
    console.log(row);
  }
}
pascalsTriangle(5);
