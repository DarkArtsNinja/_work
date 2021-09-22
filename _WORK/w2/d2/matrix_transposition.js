const transpose = function(matrix) {
  // first loop through the matrix then do a nested loop to iterate inside each array of the metrix
  
  
  
  let newArray = [];

// for (let j = 0; j < matrix[j].length; j++) {
//  for (let i = 0 ; i < matrix.length; i++)  {

//       newArray.push(matrix[i][j]);
//   }
// }
// return newArray;

for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([])  
  }
for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[j].length; k++) {
      console.log(matrix[k]);
      newArray[k].push(matrix[j][k]);

    }
}
return newArray;
}
//other way to do it
// array [a][b]
// newArray [b][a]
// transpose
//find the length of the matrix to check the number of arrays
//go through the first element of array
// and store inside the newarray
//go to the next array in the
        //create new array storing the first elements
//

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(
  
  
  transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
