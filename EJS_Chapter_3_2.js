function isEven(num) {
   num = Math.abs(num);
    if (num == 0) {
      return true }
    if (num == 1 ) {
      return false
    }
    else {
      console.log(num)
      return num = isEven(num - 2);
    }
}

console.log(isEven(-15));
