/**
 * Prepared by Tazdik Ershad
 * 
 */

// row number of the grid
let row = 0;

// column number of the grid
let column = 0;

// grid for traversing
let grid = [];

// distance array which holds the distance from start position and also use to keep the cell flag
let dist = [];

// direction array to direct the current position: left, right, up, down 
const directionX = [1, -1, 0, 0];
const directionY = [0, 0, -1, 1];

// start and end position object
let start = {x: -1, y: -1};
let end = {x: -1, y: -1};

// function to calculate minimum steps from start to end
// I have used BFS to do this
function findSteps(start, end) {

  // exception 1: start postion is less then 0 or greater then row or column
  if ((start.x < 0 && start.x >= row) || (start.y < 0 && start.y >= column)) {
    return null;
  }

  // exception 2: end postion is less then 0 or greater then row or column
  if ((end.x < 0 && end.x >= row) || (end.y < 0 && end.y >= column)) {
    return null;
  }

  // Queue for holding X co-ordinate
  let xPosQ = [];
  // Queue for holding Y co-ordinate
  let yPosQ = [];

  // current position X and Y co-ordinate
  let currPosX = -1;
  let currPosY = -1;

  // pushing X and Y co-ordinate of start position in the Queue
  xPosQ.push(start.x);
  yPosQ.push(start.y);

  // looping while the Queue has any co-ordinates
  while (xPosQ.length) {

    // getting the front co-ordinate of the Queue
    currPosX = xPosQ.shift();
    currPosY = yPosQ.shift();

    // adding the direction array value to get the adjacent postion of the current position
    for (let i = 0; i < directionX.length; i++) {
      vX = currPosX + directionX[i];
      vY = currPosY + directionY[i];

      // end postion reached condition
      if (vX === end.x && vY === end.y) {
        return dist[currPosX][currPosY] + 1;
      }

      if ((vX >= 0 && vX < row) && (vY >= 0 && vY < column) && grid[vX][vY] === 'f' && dist[vX][vY] === 0) {
        // pushing the X an Y co-ordinate to the Queue
        xPosQ.push(vX);
        yPosQ.push(vY);

        // increementing distance cell value to one
        dist[vX][vY] = dist[currPosX][currPosY] + 1;

      }
    }  

  }
  return null;
  
}

function populateDistArray(r, c) {
  return Array(r).fill().map(()=>Array(c).fill(0));
}

// testing values 1.

row = 4;
column = 4;
dist = populateDistArray(row, column);
grid = [
  ['f', 'f', 'f', 'f'],
  ['t', 't', 'f', 't'],
  ['f', 'f', 'f', 'f'],
  ['f', 'f', 'f', 'f']
];

start = {x: 3, y: 0};
end = {x: 0, y: 0};
console.log(findSteps(start, end));

// testing values 2.

row = 4;
column = 4;
dist = populateDistArray(row, column);
grid = [
  ['f', 'f', 'f', 'f'],
  ['t', 't', 't', 't'],
  ['f', 'f', 't', 'f'],
  ['f', 'f', 't', 'f']
];

start = {x: 3, y: 0};
end = {x: 0, y: 0};
console.log(findSteps(start, end));

// testing values 3.

row = 4;
column = 4;
dist = populateDistArray(row, column);
grid = [
  ['f', 'f', 'f', 'f'],
  ['t', 't', 'f', 't'],
  ['f', 'f', 'f', 'f'],
  ['f', 'f', 'f', 'f']
];

start = {x: 3, y: 0};
end = {x: 4, y: 4};
console.log(findSteps(start, end));

// testing values 4.

row = 4;
column = 4;
dist = populateDistArray(row, column);
grid = [
  ['f', 'f', 'f', 'f'],
  ['t', 't', 'f', 't'],
  ['f', 'f', 'f', 'f'],
  ['f', 'f', 'f', 'f']
];

start = {x: 0, y: 0};
end = {x: 3, y: 0};
console.log(findSteps(start, end));
