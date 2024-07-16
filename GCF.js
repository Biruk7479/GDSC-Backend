var x = 120;
var y = 45;

let a = x;
let b = y;
let r = 0;

while (b != 0) {
    r = a % b;
    a = b;
    b = r;
}

console.log("GCF:", a);