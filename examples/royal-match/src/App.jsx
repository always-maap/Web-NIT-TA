import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import "./App.css";
import Droppable from "./Droppable";
import { ITEMS } from "./constants";

function generateInitialBoard() {
  // 9x10 board
  const items = Object.keys(ITEMS);
  const board = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(items[Math.floor(Math.random() * items.length)]);
    }
    board.push(row);
  }

  // remove any matches initially
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 10; j++) {
      const item = board[i][j];
      if (
        (i >= 2 && board[i - 1][j] === item && board[i - 2][j] === item) ||
        (j >= 2 && board[i][j - 1] === item && board[i][j - 2] === item)
      ) {
        board[i][j] = items[Math.floor(Math.random() * items.length)];
        j = -1;
      }
    }
  }

  return board;
}

const parseCellId = (id) => {
  return id.split("-").map(Number);
};

/**
 * @param {string[][]} board
 * @returns {void}
 * */
function checkForMatches(board) {
  const matches = [];

  //
  for (let i = 0; i < 9; i++) {
    let matchLength = 1;
    for (let j = 0; j < 10; j++) {
      const current = board[i][j];
      const next = board[i][j + 1];
      if (current === next) {
        matchLength++;
      } else {
        if (matchLength >= 3) {
          console.log("called");
          matches.push(...Array.from({ length: matchLength }, (_, k) => [i, j - k]));
        }
        matchLength = 1;
      }
    }
  }

  for (let j = 0; j < 10; j++) {
    let matchLength = 1;
    for (let i = 0; i < 9; i++) {
      const current = board[i][j];
      const next = board[i + 1][j];
      if (current === next) {
        matchLength++;
      } else {
        if (matchLength >= 3) {
          matches.push(...Array.from({ length: matchLength }, (_, k) => [i - k, j]));
        }
        matchLength = 1;
      }
    }
  }
}

function App() {
  const [board, setBoard] = useState(() => generateInitialBoard());

  /**
   * @param {import("@dnd-kit/core").DragEndEvent}
   * @returns {void}
   * */
  const handleDragEnd = async ({ active, over }) => {
    if (!over) {
      return;
    }

    if (active.id === over.id) {
      return;
    }

    const [activeRow, activeColumn] = parseCellId(active.id);
    const [overRow, overColumn] = parseCellId(over.id);

    if (Math.abs(activeRow - overRow) + Math.abs(activeColumn - overColumn) !== 1) {
      return;
    }

    const updatedGrid = [...board];
    const temp = updatedGrid[activeRow][activeColumn];

    updatedGrid[activeRow][activeColumn] = updatedGrid[overRow][overColumn];
    updatedGrid[overRow][overColumn] = temp;

    setBoard(updatedGrid);
  };

  return (
    <div className="container wrapper">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="board">
          {board.map((row, i) => (
            <div key={i} className="row">
              {row.map((item, j) => (
                <Droppable id={`${i}-${j}`} item={item} key={j} />
              ))}
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default App;
