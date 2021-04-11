// my solution
function makeGrid (size) {
  let square = ["#"]
  let space = [' ']
  let oddRow = ''
  let evenRow = ''
  let grid = ''
  for (let i = 0; i < size/2; i ++) {
    console.log(size);
    oddRow += space + square;
    evenRow += square + space;
  }
  if (size %2 == 0) {
       oddRow = oddRow;
       evenRow = evenRow;
     }
  else {
    oddRow = oddRow.substring(0, oddRow.length - 1);
    evenRow = evenRow.substring(0, evenRow.length - 1);
  }
  if (size %2 == 0){
    for (let i = 0; i < Math.floor(size/2); i ++) {
      grid += oddRow + '\n' + evenRow + '\n';
    }
  }
  else{
    for (let i = 0; i < Math.floor(size/2); i ++) {
      grid += oddRow + '\n' + evenRow + '\n';
    }
    grid = grid + oddRow;
  }
 return (grid);
 };

console.log(makeGrid(6))

// answer from the book
// the thought behind this is that the board is a long string of ' ' and '#'
// the outter loop is just to add the line break when incrementing to the size

let size = 4;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    // generate the board string either start from space
    // when x = 0, y = 0, first element is a space
    // then the first incrementing of the inner loop, x becomes 1, x+y = 1
    // then the second incrementing of the inner loop, x = 2,  x + y = 2
    // until, the inner loop reach the length  - 1 of size
    // the outer loop will increment by 1 and value y will kepp increasing
    // but inner loop will start from x = 0 again
    if ((x + y) % 2 == 0) {
      board += " ";
      // console.log(board);
    } else {
      board += "#";
      // console.log(x+y)
      // console.log(board);
    }
   console.log(`'x+y is '${x+y}`);
  }
  // then when the inner loop is ended, add line break to the board string
  // outloop takes care of it
  console.log(y)
  board += "\n";
}

console.log(board);
