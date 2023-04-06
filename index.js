function add(a, b){
  return a + b;
}

console.log(add(5,6));

function subtract(a, b){
  return a - b;
} 

console.log(subtract(6, 7));

function multiply(a, b){
  return a * b;
}

console.log(multiply(5, 6));

function divide(a, b){
  return a / b;
}

console.log(divide(5, 6));

function increment(n){
  return ++n;
}

console.log(increment(5), 'increment');

function decrement(n){
  return --n;
}

console.log(decrement(6), 'decrement');

function makeInt(n){
  return parseInt(n, 10);
}

console.log(makeInt('10.19'), 'parseInt()');

function preserveDecimal(n){
  return parseFloat(n, 10);
}

console.log(preserveDecimal('5.54'), 'parseFloat()')