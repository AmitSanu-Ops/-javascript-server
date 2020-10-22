let sum = 0;
let n=121;
let temp = n;
while (temp > 0) {
    let r = temp % 10;
    sum += r * r * r;
    temp = parseInt(temp / 10);
}
if (sum == n) {
    console.log(`${n} is an Armstrong number`);
}
else {
    console.log(`${n} is not an Armstrong number.`);
}
