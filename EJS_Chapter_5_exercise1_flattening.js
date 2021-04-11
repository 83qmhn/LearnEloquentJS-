let arrays = [[1, 2, 3], [4, 5], [6]];
function flattening(arrays){
  // pass concat to reduce() to flatten the inside array
  // use reduce to combine all innter arrays together
  return arrays.reduce((a, b) => a.concat(b), [])
  };

console.log(flattening(arrays));
