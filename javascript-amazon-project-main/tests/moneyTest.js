import { formateCurrency } from "../scripts/utils/money.js";

console.log("test suits: formateCurrency");

console.log("converts cents into dollars")
// base case
if (formateCurrency(2095) === '20.95' ){
    console.log('passed');
}
else{
    console.log("failed");
}

console.log('works with zero')
// edge cases
if (formateCurrency(0) === "0.00") {
  console.log("passed");
  
} else {
  console.log("failed");
  
}
console.log("rounds u to  the nearest Cents");
if (formateCurrency(2000.4) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}


