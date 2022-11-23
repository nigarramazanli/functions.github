function findGCD(a6, b6){
    if(a6==0){
        return b6;
    }
    return findGCD(b6%a6,a6);
}
let a6 = getNumberFromUser("Please enter the value for A:");
let b6 = getNumberFromUser("Please enter the value for B:");
console.log(`GCD: `+ findGCD(a6,b6));
