
function isArmstrongNumber(n) {


let sum = 0;
//let n=1634;
let temp = n;
let d = n.toString().length; 
//console.log(d);
while (temp > 0) {
    
    let r = temp % 10;
    sum += Math.pow(r,d);
    temp = parseInt(temp / 10);
}
if (sum == n) {
    console.log(`${n} is an Armstrong number`);
}
else {
    console.log(`${n} is not an Armstrong number.`);
}
}
isArmstrongNumber(1634)
isArmstrongNumber(153)
isArmstrongNumber(92727)
isArmstrongNumber(121)
