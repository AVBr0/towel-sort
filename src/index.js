module.exports = function towelSort (matrix) {
 
  let resultArray = [];

  if(matrix)
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
      let arrayPart = i%2 == 0 ? j : (matrix[i].length-j-1);
      resultArray.push(matrix[i][arrayPart]);
    }
  }
  return resultArray;
}