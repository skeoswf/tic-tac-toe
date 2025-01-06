
const gameContainer = document.getElementById("game-container");

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

const idMap = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

let playerTurn = true;

gameContainer.addEventListener('click', (event) => {
  const targetId = event.target.id;
  if (playerTurn) {
    if (targetId === 'a1' && ((grid[0][0]).length === 0)) {
      grid[0][0].push("X")
      a1.innerHTML = 'x';
      (playerTurn = !playerTurn)
      if (gameCheck() === false) {
        setTimeout(computerOpponent, 500);
      } else {
        // function that resets the board
      }
      console.log(playerTurn)
      console.log(grid)
    }
  }
})

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

// so now we have 2 random numbers we can use for row and columns
// create a function that would take those 2 inputs

// a1.addEventListener("click", () => { console.log("a1 clicked!!") })
// a2.addEventListener("click", () => { console.log("a2 clicked!!") })
// a3.addEventListener("click", () => { console.log("a3 clicked!!") })

// b1.addEventListener("click", () => { console.log("b1 clicked!!") })
// b2.addEventListener("click", () => { console.log("b2 clicked!!") })
// b3.addEventListener("click", () => { console.log("b3 clicked!!") })

// c1.addEventListener("click", () => { console.log("c1 clicked!!") })
// c2.addEventListener("click", () => { console.log("c2 clicked!!") })
// c3.addEventListener("click", () => { console.log("c3 clicked!!") })
