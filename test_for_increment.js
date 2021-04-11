

let found = false;
function foo() {
  for (let i = 1; !found; i++ ){
  if(i % 17 == 0){
    found = true;
    //return i;
  }

}
console.log("test", 0);
}

console.log(foo());
