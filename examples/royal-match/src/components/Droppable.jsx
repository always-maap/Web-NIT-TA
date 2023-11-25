import { useDroppable } from "@dnd-kit/core";
import { motion } from "framer-motion";

import DraggableCell from "./DraggableCell";
import { ITEMS } from "../constant/items";

/**
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.item
 */
export default function Droppable(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <motion.div ref={setNodeRef} className="item" initial={{ y: 20 }} animate={{ y: 0 }}>
      <DraggableCell id={props.id}>
        <motion.img
          transition={{ duration: 0.1 }}
          layoutId={props.id}
          src={ITEMS[props.item]}
          alt={props.item}
          data-id={props.id}
        />
      </DraggableCell>
    </motion.div>
  );
}
