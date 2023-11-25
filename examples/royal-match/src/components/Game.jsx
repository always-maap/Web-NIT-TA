import { useState } from "react";
import { DndContext, useSensors, PointerSensor, useSensor, closestCorners } from "@dnd-kit/core";

import "../styles/App.css";
import Droppable from "./Droppable";
import { motion } from "framer-motion";
import { checkForMatches } from "../logic/check";
import { initBoard } from "../logic/init";
import { parseCellId } from "../logic/parse";

/* edge cases
  - the game will rearrange the pieces to make a match possible
*/

function App() {
  const [board, setBoard] = useState(() => initBoard());

  const sensors = useSensors(useSensor(PointerSensor));

  /**
   * @param {import("@dnd-kit/core").DragEndEvent}
   * @returns {void}
   */
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

    checkForMatches(updatedGrid);

    setBoard(updatedGrid);
  };

  return (
    <div className="container wrapper">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCorners}>
        <motion.div className="board">
          {board.map((row, i) => (
            <div key={i} className="row">
              {row.map((item, j) => (
                <Droppable id={`${i}-${j}`} item={item} key={j} />
              ))}
            </div>
          ))}
        </motion.div>
      </DndContext>
    </div>
  );
}

export default App;
