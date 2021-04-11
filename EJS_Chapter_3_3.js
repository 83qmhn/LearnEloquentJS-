function countBs(str) {
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    if (str[i] == 'B') {
      counter += 1;
    }
  }
  return counter;
}

console.log(countBs("BBC"));

function countChar(str, elm) {
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    if (str[i] == elm) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countChar("kakkerlak", "k"));
