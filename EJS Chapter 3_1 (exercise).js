function min(num1, num2) {
  let smaller;
  if (num1 - num2 >0) smaller = num2
  else  smaller = num1
  return smaller
}

console.log(min(0, -10));
