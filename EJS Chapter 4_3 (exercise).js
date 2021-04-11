var list = null;

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

function arrayToList(array) {
var node;

var reversedArray = reverseArray(array);
if (array.length == 1) {
  list.value = array[0]
}
else{
for (let i = array.length-1; i > -1; i--) {
  node = array[i];
  list = {value: node, rest: list};
  node = list.rest
};
}
return list
}

function listToArray(list) {
  var result = [];
  // can't believe I can write JS for loop like this
  for (let node = list; node; node = node.rest){
    let elm = node.value;
    result.push(elm);
  }
 return result
}

function prepend(element, list){
 list = {value: element, rest:list};
 return list;
}

function nth(list,index){
  var counter = 0;
  for (let node = list; node; node = node.rest){
    if (index == counter){
    return node.value;}
    counter++;
  }
  return undefined;
  }

  function recur_nth(list, index, counter = 0){
    if (list == null){
      return undefined;
    }
    else {
      if(counter == index){
        console.log(counter, index)
        return list.value;
    }
    }
    return recur_nth(list = list.rest, index, counter = counter+1)
  }

// console.log(recur_nth(arrayToList([10, 20, 30]), 1));
// console.log(nth(arrayToList([10, 20, 30]), 2));
// console.log(arrayToList([1,2,3]));
// console.log(prepend(5,{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
// console.log(prepend(10, prepend(20, null)));
