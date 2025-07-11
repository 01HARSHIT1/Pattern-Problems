// Code for Hollow Diamond Pattern

let n = 5;
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  if (i === 1) {
    console.log(spaces + "*");
  } else {
    let inside = " ".repeat(2 * i - 3);
    console.log(spaces + "*" + inside + "*");
  }
}
console.log("*".repeat(2 * n - 1));
for (let i = n - 1; i >= 1; i--) {
  let spaces = " ".repeat(n - i);
  if (i === 1) {
    console.log(spaces + "*");
  } else {
    let inside = " ".repeat(2 * i - 3);
    console.log(spaces + "*" + inside + "*");
  }
}
