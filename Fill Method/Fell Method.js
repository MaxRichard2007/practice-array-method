const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.fill(1));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

const y = arr.fill(23, 3, 5);

console.log(y);

// Array.from

const w = Array.from({ length: 4 }, () => 13);
console.log(w);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
