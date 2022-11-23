let a7 = getNumberFromUser("Please enter the number:");
findMirrorImage(a7);
function findMirrorImage(variable){
  let r, mirror = 0;
while (variable != 0) {
  r = variable % 10;
  mirror = mirror * 10 + r;
  variable = (variable - r) / 10;
}
console.log(`Mirror image:${mirror}`);
}