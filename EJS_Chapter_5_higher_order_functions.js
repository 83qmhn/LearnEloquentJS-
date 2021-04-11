/* higher order funcation is a way of abstraction in programming
they either take other functions as arguments or operate on  */
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// pass a function into another function
function repeat(n, action){
  for(let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

// the function can be created on the spot as below, kind of like a for loop
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

/* Then, there comes a classic example we see in functional programming,
which is very common in JS. we have functions that change other functions  */

function noisy(fuc){
// ...args rest operator
  return (...args) => {
    console.log("calling with", args);
    let result = fuc(...args);
    console.log("called with", args, ", return", result);
    return result;
  }
}

/* above function takes in function Math.min in its inner scope and return
console.log helps us to see what's going on inside of noisy
all effecitvely Math.min is wrapped in function noisy*/
noisy(Math.min)(3,2,1);

// may be a more obvious way to see is going to be
let giveMin = noisy(Math.min);
giveMin(1,2,3);

// below is a very common way of writing JS at work
function unless(test, then){
  // then must be a function
  if(!test) then();
}

repeat(3, n => {
  // anonumous function printing out even numbers
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// the forEach array method in JS provides sth like a for/of loop as HOF
["A", "B"].forEach(l => console.log(l+l));
