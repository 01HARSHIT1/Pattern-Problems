// Code for Alphabet Hourglass

let n = 5;
function buildLine(i) {
  let spaces = " ".repeat(i);
  let letters = "";
  for (let j = 0; j < n - i; j++) {
    letters += String.fromCharCode(65 + j);
  }
  for (let j = n - i - 2; j >= 0; j--) {
    letters += String.fromCharCode(65 + j);
  }
  console.log(spaces + letters);
}
for (let i = 0; i < n; i++) {
  buildLine(i);
}
for (let i = n - 2; i >= 0; i--) {
  buildLine(i);
}
