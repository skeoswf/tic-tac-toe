
const gameContainer = document.getElementById("game-container");
// this is the div container holding the grid as a visual representation of a 2d array

const a1 = document.getElementById("a1")
const a2 = document.getElementById("a2")
const a3 = document.getElementById("a3")

const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")

const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")

let grid = [
  [[], [], []],
  [[], [], []],
  [[], [], []]
];

// maps and stores user and computer inputs

const blankGrid = [
  [[], [], []],
  [[], [], []],
  [[], [], []]
];

// blank grid for reset games

const idMap = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

// grid with ids to help with manipulating inner htmls

let playerTurn = true;

// while true, the player can select a move

gameContainer.addEventListener('click', (event) => {
  const targetId = event.target.id;

  if (playerTurn) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (targetId === idMap[row][col] && grid[row][col].length === 0) {
          // Mark the grid
          grid[row][col].push("X");
          document.getElementById(targetId).innerHTML = 'x';
          playerTurn = !playerTurn;


          if (gameCheck() === false) {
            setTimeout(computerOpponent, 500);
            if (gameCheck() === false) {
              playerTurn = !playerTurn;
              console.log("your turn!");
            } else {
              console.log("you suck ass. reset.");
              grid = blankGrid;
              playerTurn = !playerTurn;
            }
          }
          return;
        }
      }
    }
  }
});



const gameCheck = () => {
  // check for horizontal win 
  for (let row of grid) {
    if (row.every(cell => cell.includes('x'))) {

      return true;
    }
  }

  for (let row of grid) {
    if (row.every(cell => cell.includes('o'))) {

      return true;
    }
  }

  // check for column wins
  for (let col = 0; col < 3; col++) {
    if (grid.every(row => row[col].includes('x'))) {
      return true;
    }

  };

  for (let col = 0; col < 3; col++) {
    if (grid.every(row => row[col].includes('o'))) {
      return true;
    }

  };

  return false; // game ongoing
}

const computerOpponent = () => {
  let computerOpponentRow = (Math.floor(Math.random() * 3))
  let computerOpponentColumn = (Math.floor(Math.random() * 3))

  const computerOpponentInput = (computerOpponentRow, computerOpponentColumn) => {
    if (grid[computerOpponentRow][computerOpponentColumn].length === 0) {
      grid[computerOpponentRow][computerOpponentColumn].push('O')

      document.getElementById(idMap[computerOpponentRow][computerOpponentColumn]).innerHTML = 'o'
    } else {
      computerOpponent()
    }
  }

  computerOpponentInput(computerOpponentRow, computerOpponentColumn);
  (playerTurn = !playerTurn)
}

document.addEventListener("click", () => {
  console.log(grid)
  console.log(playerTurn)
})

// a1.addEventListener("click", () => { console.log("a1 clicked!!") })
// a2.addEventListener("click", () => { console.log("a2 clicked!!") })
// a3.addEventListener("click", () => { console.log("a3 clicked!!") })

// b1.addEventListener("click", () => { console.log("b1 clicked!!") })
// b2.addEventListener("click", () => { console.log("b2 clicked!!") })
// b3.addEventListener("click", () => { console.log("b3 clicked!!") })

// c1.addEventListener("click", () => { console.log("c1 clicked!!") })
// c2.addEventListener("click", () => { console.log("c2 clicked!!") })
// c3.addEventListener("click", () => { console.log("c3 clicked!!") })
