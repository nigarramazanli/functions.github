let a8 = getNumberFromUser("Please enter the value for A:");
let b8 = getNumberFromUser("Please enter the value for B:");
checkSameDigit(a8,b8);
function checkSameDigit(a,b){
  let ra, rb;
  let flag=false;
  while(a != 0){
    ra = a % 10;
    a = (a-ra)/10;
    while(b != 0){
      rb = b % 10;
      b = (b-rb)/10;
    if(ra==rb){
        flag=true;
        console.log(`YES!`);
      }
  }
  } 
  if(flag==false){
    console.log(`NO!`);
  }
}