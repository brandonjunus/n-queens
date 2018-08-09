/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.counterObjectIncrement = function(counterObject, n){
  // debugger;
  counterObject[0] ++;
  for(let key = 0; key < n; key++){
    if (counterObject[n - 1] > n){
      console.log("We're Done");
      return
    } else if (counterObject[key] > n){
      counterObject[key] = 0;
      counterObject[key + 1]++;
    }
  }
  console.log(counterObject)
  return(counterObject);
} 

window.makeMatrixFromCounterObject = function(counterObject, n){
  var matrix = [];
  for (let key in counterObject){
    var currentRow = [];
    for(let i = 0; i < n; i++){
      if(counterObject[key] === i){
        currentRow.push(1);
      }  else {
        currentRow.push(0)
      }
    }
    matrix.push(currentRow);
  }
  return matrix
}



window.findNRooksSolution = function(n) {
  var listOfSatisfactoryMatrices = [];
  var counterObject = {};
  for (var i = 0; i < n; i++) {
    counterObject[i] = 0;
  }
  var test = true;
  // debugger;
  // var x = 0
  while (test === true){
    
    var currentMatrix = makeMatrixFromCounterObject(counterObject, n);
    var currentBoard = new Board (currentMatrix);
    if(!currentBoard.hasAnyRooksConflicts()){
      listOfSatisfactoryMatrices = currentMatrix;
      // listOfSatisfactoryMatrices.push(solution);
      test = false;
    } else{
      counterObjectIncrement(counterObject, n);
    }
    // x++;
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return listOfSatisfactoryMatrices;

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
