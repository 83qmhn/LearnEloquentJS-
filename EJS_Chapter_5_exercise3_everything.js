// v1 using a loop
function every(array, test) {
  for (let elem of array){
    if (!test(elem)){
      return false}
    }
  return true;
}

// v2 using the some method
function every1(array, test){
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every1([1, 3, 5], n => n < 10));
console.log(' ');
console.log(every([2, 4, 16], n => n < 10));
console.log(every1([2, 4, 16], n => n < 10));
console.log(' ');
console.log(every([], n => n < 10));
console.log(every1([], n => n < 10));
