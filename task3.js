const a3 = getNumberFromUser("Please enter the number:");
printTheLargestDivisor(a3);
function printTheLargestDivisor(variable){
  let divisor;
  for (let index = 1; index <= variable / 2; index++) {
    if (a3 % index == 0) {
      divisor = index;
    }
  }
  console.log(divisor);
}