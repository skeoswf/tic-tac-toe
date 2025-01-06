
let grid = [
  [[], [], []],
  [[], [], []],
  [[], [], []]
];

let playerTurn = true;

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

gameContainer.addEventListener('click', (event) => {
  const targetId = event.target.id;
  if (playerTurn) {
    if (targetId === 'a1') {
      grid[0][0].push("X")
      a1.innerHTML = 'x';
      (playerTurn = !playerTurn)
      if (gameCheck = false) {
        // add a function that picks a random thing, then allows the player to choose again
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



// a1.addEventListener("click", () => { console.log("a1 clicked!!") })
// a2.addEventListener("click", () => { console.log("a2 clicked!!") })
// a3.addEventListener("click", () => { console.log("a3 clicked!!") })

// b1.addEventListener("click", () => { console.log("b1 clicked!!") })
// b2.addEventListener("click", () => { console.log("b2 clicked!!") })
// b3.addEventListener("click", () => { console.log("b3 clicked!!") })

// c1.addEventListener("click", () => { console.log("c1 clicked!!") })
// c2.addEventListener("click", () => { console.log("c2 clicked!!") })
// c3.addEventListener("click", () => { console.log("c3 clicked!!") })


// if a1 is clicked, then i want [0, 0] to be true
// if a1 has a click event
// replace the console log with grid [0, 0] = 1
// console.log grid


// 1 is user
// 2 is computer 
