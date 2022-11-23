const a4 = getNumberFromUser("Please enter the value for a:");
const b4 = getNumberFromUser("Please enter the value for b:");
printSum(a4,b4);
function printSum(a,b){
  let sum = 0;
for (let n = a; n < b; n++) {
  if (n % 7 == 0) {
    sum = sum + n;
  }
}
console.log(sum);
}
