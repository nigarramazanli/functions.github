const a1 = getNumberFromUser("Please enter the number");
findCount(a1);
function findCount(variable){
  let number = 0;
  for (let i = 1; i * i < variable; i++) {
    number = number + 1;
  }
  console.log(number);
}