let a = 120;
let b = 45;

while (b != 0) {
    r = a % b;
    a = b;
    b = r;
}

console.log("GCF:", a);
