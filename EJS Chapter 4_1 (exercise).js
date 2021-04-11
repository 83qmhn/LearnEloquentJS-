// the sum of a range
function range(start, end){
  let myArray = [];
  let sum = 0;
  if (start < end) {
    for (let i =0; i < (end-start)+1; i++ ) {
      myArray.push(start + i)
      sum += start + i
    }
}
else {
  for (let i =0; i < (start-end)+1; i++ ) {
    myArray.push(start - i)
    sum += start - i
  }
}
  return (myArray, sum)
}

console.log(range( -2, 1));
// function sum(range(start, end)) {
// };
// console.log(sum(range(1, 10)));
