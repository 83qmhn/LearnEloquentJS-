function reverseArray(array){
  let newArray = [];
  for (let i = array.length; i>0; i--) {
    newArray.push(array[i-1]);
  }
  return newArray
}

 function reverseArrayInPlace(arrayValue){
   let startIndex = 0;
   let endIndex = arrayValue.length - 1;
   if (arrayValue.length == 1) {
     return arrayValue;
   }
   else if (arrayValue.length%2 == 0) {
     for (let i = 0; i < arrayValue.length/2; i++) {
       arrayValue[startIndex] == arrayValue[endIndex];
       startIndex += i ;
       endIndex -= i;
   }
 }
   return arrayValue;
 }

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(reverseArray(["A", "B", "C"]));
