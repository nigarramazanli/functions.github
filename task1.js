const a = getNumberFromUser("Please enter the number:");
calculateFormula(a);
function calculateFormula(variable) {
  for (let counter = 1; counter < 1000; counter++) {
    if (counter % variable == 0) {
      console.log(counter);
    }
  }
}