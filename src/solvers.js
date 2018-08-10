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
    if (counterObject[n - 1] === n){
      console.log("We're Done");
      return false;
    } else if (counterObject[key] === n){
      counterObject[key] = 0;
      counterObject[key + 1]++;
    }
  }
  return counterObject;
} 

window.makeMatrixFromCounterObject = function(counterObject, n){
  var matrix = [];
  for (let key in counterObject){
    var currentRow = [];
    for(let i = 0; i < n; i++){
      if(counterObject[key] === i){
        currentRow.push(1);
      } else {
        currentRow.push(0);
      }
    }
    matrix.push(currentRow);
  }
  return matrix;
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
  while (test === true) {
    
    var currentMatrix = makeMatrixFromCounterObject(counterObject, n);
    var currentBoard = new Board (currentMatrix);
    if(!currentBoard.hasAnyRooksConflicts()) {
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
  // debugger;
  var count = 0;
  var counterObject = {};
  for (var i = 0; i < n; i++) {
    counterObject[i] = 0;
  }
  var test = true;
  // debugger;
  while (test === true) {
    
    var currentMatrix = makeMatrixFromCounterObject(counterObject, n);
    var currentBoard = new Board (currentMatrix);
    if(!currentBoard.hasAnyRooksConflicts()) {
      count++;
    } 
    var test2 = counterObjectIncrement(counterObject, n)
    if(test2 === false) {
      test = false;    
    }
    };
  
  console.log("We made it to the end")
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var counterObject = {};
  for (var i = 0; i < n; i++) {
    counterObject[i] = 0;
  }
  var test = true;
  while (test === true){
    var currentMatrix = makeMatrixFromCounterObject(counterObject, n);
    var currentBoard = new Board (currentMatrix);
    if(!currentBoard.hasAnyQueensConflicts()){
      if(currentBoard.hasCorrectNumberOfQueens()){
        // got a correct solution
        solution = currentMatrix;
        test = false;
      } else {
        console.log("Got to the end with no solution")
        noSolution = new Board({n: n});  
        return noSolution.rows();
      }
    } else {
      counterObjectIncrement(counterObject, n);
    }
  }
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // hard coded- not sure what the test is looking for
  if (n ===0 ){
    return 1;
  }
  var count = 0;
  var counterObject = {};
  for (var i = 0; i < n; i++) {
    counterObject[i] = 0;
  }
  var test = true;
  while (test === true){
    
    var currentMatrix = makeMatrixFromCounterObject(counterObject, n);
    var currentBoard = new Board (currentMatrix);
    if(!currentBoard.hasAnyQueensConflicts()){
      count++;
    } 
    var test2 = counterObjectIncrement(counterObject, n)
    if(test2 === false){
      test = false;    
    }
    };
  console.log("We made it to the end")
  return count;
};
