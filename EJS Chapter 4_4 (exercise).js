function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  // this is from the answer, didn't fully understand the question until I see the answer
  for (let key of keysA) {
    console.log(key);
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}


let obj = {here: {is: "an"}, object: 2};

// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
