import { twMerge } from 'tailwind-merge'

export function tw(...classes) {
  return twMerge(classes);
}

export const getRandomEmptyCellLocation = (board) => {
  const emptyTiles = []
  board.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value === null) {
        emptyTiles.push({ x, y })
      }
    })
  })
  return emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
}

export const getInitialBoard = (boardSize) => {
  return Array.from({ length: boardSize }).map(() =>
    Array.from({ length: boardSize }).fill(null)
  )
}

export const maybeMoveTiles = (board, direction, setScore) => {
  const newBoard = [...board.map(col => [...col])];

  if (direction === 'ArrowUp') {
    for (let x = 0; x < newBoard.length; x++) {
      for (let y = 0; y < newBoard.length; y++) {
        if (newBoard[x][y] !== null) {
          let currentY = y;
          while (currentY > 0 && newBoard[x][currentY - 1] === null) {
            newBoard[x][currentY - 1] = newBoard[x][currentY];
            newBoard[x][currentY] = null;
            currentY--;
          }
          if (currentY > 0 && newBoard[x][currentY - 1] !== null && newBoard[x][currentY - 1].value === newBoard[x][currentY].value && !newBoard[x][currentY - 1].merged) {
            setScore((prev) => prev + (newBoard[x][currentY - 1].value *= 2))
            newBoard[x][currentY - 1].merged = true;
            newBoard[x][currentY] = null;
          }
        }
      }
    }
  }

  if (direction === 'ArrowDown') {
    for (let x = 0; x < newBoard.length; x++) {
      for (let y = newBoard.length - 1; y >= 0; y--) {
        if (newBoard[x][y] !== null) {
          let currentY = y;
          while (currentY < newBoard.length - 1 && newBoard[x][currentY + 1] === null) {
            newBoard[x][currentY + 1] = newBoard[x][currentY];
            newBoard[x][currentY] = null;
            currentY++;
          }
          if (currentY < newBoard.length - 1 && newBoard[x][currentY + 1] !== null && newBoard[x][currentY + 1].value === newBoard[x][currentY].value && !newBoard[x][currentY + 1].merged) {
            setScore((prev) => prev + (newBoard[x][currentY + 1].value *= 2))
            newBoard[x][currentY + 1].merged = true;
            newBoard[x][currentY] = null;
          }
        }
      }
    }
  }

  if (direction === 'ArrowLeft') {
    for (let y = 0; y < newBoard.length; y++) {
      for (let x = 0; x < newBoard.length; x++) {
        if (newBoard[x][y] !== null) {
          let currentX = x;
          while (currentX > 0 && newBoard[currentX - 1][y] === null) {
            newBoard[currentX - 1][y] = newBoard[currentX][y];
            newBoard[currentX][y] = null;
            currentX--;
          }
          if (currentX > 0 && newBoard[currentX - 1][y] !== null && newBoard[currentX - 1][y].value === newBoard[currentX][y].value && !newBoard[currentX - 1][y].merged) {
            setScore((prev) => prev + (newBoard[currentX - 1][y].value *= 2))
            newBoard[currentX - 1][y].merged = true;
            newBoard[currentX][y] = null;
          }
        }
      }
    }
  }

  if (direction === 'ArrowRight') {
    for (let y = 0; y < newBoard.length; y++) {
      for (let x = newBoard.length - 1; x >= 0; x--) {
        if (newBoard[x][y] !== null) {
          let currentX = x;
          while (currentX < newBoard.length - 1 && newBoard[currentX + 1][y] === null) {
            newBoard[currentX + 1][y] = newBoard[currentX][y];
            newBoard[currentX][y] = null;
            currentX++;
          }
          if (currentX < newBoard.length - 1 && newBoard[currentX + 1][y] !== null && newBoard[currentX + 1][y].value === newBoard[currentX][y].value && !newBoard[currentX + 1][y].merged) {
            setScore((prev) => prev + (newBoard[currentX + 1][y].value *= 2))
            newBoard[currentX + 1][y].merged = true;
            newBoard[currentX][y] = null;
          }
        }
      }
    }
  }

  for (let x = 0; x < newBoard.length; x++) {
    for (let y = 0; y < newBoard.length; y++) {
      if (newBoard[x][y] !== null) {
        newBoard[x][y].merged = false;
      }
    }
  }

  return newBoard
}