// kind of a loop
function loop(value, test, update, body){
  for(let i = value; i!= 0 ; i--){
    if (test(i)){
    let ans = update(i);
    body(ans + 1);
    }
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
