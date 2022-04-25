
"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo

 


  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = [];

for(let i = num; i > 0;){
  bin.unshift(i % 2)
  i = Math.floor(i / 2);
}
return bin.join('');
}

// No se pueden usar: 
// parseInt
// toString









module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
